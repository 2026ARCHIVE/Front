import {
  getEvent,
  getEvents,
  type EventApiDetailItem,
  type EventApiItem,
} from "@/api/events";

export type BenefitDisplayItem =
  | { kind: "line"; text: string }
  | { kind: "section"; title: string };

/** API caution 미제공 시 프론트 고정 유의사항 (이벤트 id 기준) */
const EVENT_CAUTION_OVERRIDES: Record<string, BenefitDisplayItem[]> = {
  "7": [
    { kind: "line", text: "참여 비용은 종목별 1회 기준입니다." },
    { kind: "line", text: "기록은 현장 운영진 확인 기준으로 인정됩니다." },
    { kind: "line", text: "대리 참여 및 대리 수령은 제한될 수 있습니다." },
    {
      kind: "line",
      text: "게임 참여 시 안전사고 예방을 위해 무리한 동작은 삼가 주시기 바랍니다.",
    },
    {
      kind: "line",
      text: "운영진의 안내를 따르지 않거나 개인 부주의로 인해 발생한 부상에 대해서는 주최 측에서 책임지지 않습니다.",
    },
    { kind: "line", text: "기계가 파손될 경우 책임은 참가자 본인에게 있습니다." },
    {
      kind: "line",
      text: "동점자 발생 시, 개별 연락으로 게임을 한 번 더 진행합니다.",
    },
  ],
};

/**
 * 이벤트 id → 유의사항 위 이미지 (public 경로).
 * 예: "7": ["/events/caution-7.webp"]
 */
export const EVENT_CAUTION_IMAGE_OVERRIDES: Record<string, string[]> = {};

/** 이벤트 id → 혜택 줄별 이미지 (public 경로, benefit line 순서와 1:1) */
const EVENT_BENEFIT_IMAGE_OVERRIDES: Record<string, string[]> = {
  "7": [
    "/product/nike.webp",
    "/product/baemin_5.webp",
    "/product/baemin_3.webp",
    "/product/v.webp",
    "/product/olive_5.webp",
    "/product/olive_3.webp",
  ],
};

export type EventItem = {
  id: string;
  title: string;
  timeRange: string; // "10:00 - 22:00"
  location: string; // "학생회관 앞 A 1-5"
  imageUrl?: string;
  content?: string;
  descriptionLines?: string[];
  howToSteps?: string[];
  benefitItems?: BenefitDisplayItem[];
  benefitImageUrls?: string[];
  cautionItems?: BenefitDisplayItem[];
  showCautionImageSlot?: boolean;
  cautionImageUrls?: string[];
};

function formatHHmm(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}

function toTextLines(text: string | null | undefined) {
  if (!text) return undefined;
  const lines = text
    .split(/\r?\n/)
    .map((v) => v.trim())
    .filter(Boolean);
  return lines.length > 0 ? lines : undefined;
}

function normalizeImageUrls(urls: unknown): string[] | undefined {
  if (!Array.isArray(urls)) return undefined;
  const normalized = urls
    .filter((url): url is string => typeof url === "string")
    .map((url) => url.trim())
    .filter(
      (url) =>
        url.length > 0 &&
        (url.startsWith("http://") || url.startsWith("https://")),
    );
  return normalized.length > 0 ? normalized : undefined;
}

function hasRankPattern(text: string) {
  return /\d+등/.test(text);
}

function splitBenefitSection(section: string) {
  const trimmed = section.trim();
  if (!trimmed) return [];

  if (hasRankPattern(trimmed)) {
    return trimmed
      .split(/\s*\/\s*/)
      .map((part) => part.trim())
      .filter(Boolean);
  }

  return [trimmed];
}

function formatBenefitRankLine(text: string) {
  const trimmed = text.trim();
  const rankMatch = trimmed.match(/^(\d+등)\s*[:：]\s*(.+)$/);
  if (rankMatch) return `[${rankMatch[1]}] ${rankMatch[2]}`;
  return trimmed;
}

function parseBenefitSection(section: string) {
  const trimmed = section.trim();
  const genderMatch = trimmed.match(/^(남학우|여학우)\s*/);

  if (genderMatch) {
    const title = genderMatch[1];
    const body = trimmed.slice(genderMatch[0].length);
    const lines = splitBenefitSection(body).map(formatBenefitRankLine);
    return { title, lines };
  }

  return {
    lines: splitBenefitSection(trimmed).map(formatBenefitRankLine),
  };
}

function toBenefitItems(text: string | null | undefined): BenefitDisplayItem[] | undefined {
  if (!text?.trim()) return undefined;

  if (text.includes("\n")) {
    const lines = toTextLines(text);
    return lines?.map((line) => ({ kind: "line", text: line }));
  }

  if (text.includes("|")) {
    const sections = text.split(/\s*\|\s*/).filter((s) => s.trim());
    const items: BenefitDisplayItem[] = [];

    sections.forEach((section) => {
      const { title, lines } = parseBenefitSection(section);
      if (title) items.push({ kind: "section", title });
      for (const line of lines) {
        items.push({ kind: "line", text: line });
      }
    });

    return items.length > 0 ? items : undefined;
  }

  if (hasRankPattern(text) && text.includes("/")) {
    const { title, lines } = parseBenefitSection(text);
    const items: BenefitDisplayItem[] = [];
    if (title) items.push({ kind: "section", title });
    for (const line of lines) {
      items.push({ kind: "line", text: line });
    }
    return items.length > 0 ? items : undefined;
  }

  return [{ kind: "line", text: text.trim() }];
}

function pickCaution(api: EventApiDetailItem): string | undefined {
  const raw = api as EventApiDetailItem & Record<string, unknown>;
  const value = api.caution ?? raw.caution;
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function toCautionItems(caution: string | undefined): BenefitDisplayItem[] | undefined {
  if (!caution) return undefined;
  const lines = toTextLines(caution) ?? [caution];
  return lines.map((text) => ({ kind: "line", text }));
}

function resolveCautionImageSlot(api: EventApiDetailItem) {
  const urls = EVENT_CAUTION_IMAGE_OVERRIDES[String(api.id)]
    ?.map((url) => url.trim())
    .filter(Boolean);
  if (!urls?.length) {
    return { showCautionImageSlot: false as const, cautionImageUrls: [] as string[] };
  }
  return {
    showCautionImageSlot: true as const,
    cautionImageUrls: urls,
  };
}

function resolveCautionItems(api: EventApiDetailItem): BenefitDisplayItem[] | undefined {
  const fromApi = toCautionItems(pickCaution(api));
  if (fromApi) return fromApi;

  const override = EVENT_CAUTION_OVERRIDES[String(api.id)];
  return override;
}

/** 관리자 폼: API caution 우선, 없으면 프론트 fallback 문구(줄바꿈) */
export function getCautionTextForForm(api: EventApiDetailItem): string {
  const fromApi = pickCaution(api);
  if (fromApi) return fromApi;

  const override = EVENT_CAUTION_OVERRIDES[String(api.id)];
  if (!override) return "";

  return override
    .filter((entry) => entry.kind === "line")
    .map((entry) => entry.text)
    .join("\n");
}

function pickContentImageUrls(api: EventApiDetailItem): string[] | undefined {
  const raw = api as EventApiDetailItem & Record<string, unknown>;
  return (
    normalizeImageUrls(api.contentImageUrls) ??
    normalizeImageUrls(raw.content_image_urls)
  );
}

function countBenefitLines(items: BenefitDisplayItem[] | undefined) {
  return items?.filter((entry) => entry.kind === "line").length ?? 0;
}

function resolveBenefitImageUrls(
  api: EventApiDetailItem,
  benefitItems: BenefitDisplayItem[] | undefined,
): string[] | undefined {
  const fromApi = pickContentImageUrls(api);
  if (fromApi?.length) return fromApi;

  const override = EVENT_BENEFIT_IMAGE_OVERRIDES[String(api.id)];
  if (!override?.length) return undefined;

  const lineCount = countBenefitLines(benefitItems);
  if (lineCount === 0) return undefined;

  return override.slice(0, lineCount);
}

function mapEventApiItemToEventItem(api: EventApiItem): EventItem {
  const start = formatHHmm(api.startTime);
  const end = formatHHmm(api.endTime);
  const timeRange = start && end ? `${start} - ${end}` : start || end || "-";
  return {
    id: String(api.id),
    title: api.title,
    timeRange,
    location: api.location,
    imageUrl: api.imageUrls?.[0],
    descriptionLines: toTextLines(api.description),
  };
}

function mapEventApiDetailToEventItem(api: EventApiDetailItem): EventItem {
  const benefitItems = toBenefitItems(api.productDescription);
  return {
    ...mapEventApiItemToEventItem(api),
    content: api.content ?? undefined,
    howToSteps: toTextLines(api.content),
    benefitItems,
    benefitImageUrls: resolveBenefitImageUrls(api, benefitItems),
    cautionItems: resolveCautionItems(api),
    ...resolveCautionImageSlot(api),
  };
}

export async function fetchEvents(): Promise<EventItem[]> {
  const data = await getEvents();
  return data.map(mapEventApiItemToEventItem);
}

export async function fetchEventById(id: string): Promise<EventItem | null> {
  const data = await getEvent(id, { revalidate: 0 });
  if (!data) return null;
  return mapEventApiDetailToEventItem(data);
}
