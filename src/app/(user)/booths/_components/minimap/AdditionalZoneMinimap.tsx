"use client";

import { externalCompanyList } from "@/data/festival/external-company";
import {
  matchesZoneBoothNo,
  parseLocationKey,
} from "@/data/festival/boothPlaceUtils";
import type { FestivalListItem } from "@/data/festival/types";

type AdditionalZoneSlot = {
  label: string;
  x: number;
  y: number;
  width: number;
  locationKey: string;
};

const BOOTH_WIDTH = 14.7705;
const BOOTH_HEIGHT = 25.6541;

/** 추가 구역 부스 슬롯 — additional.svg rect 좌표 기준 */
const ALL_SLOTS: AdditionalZoneSlot[] = [
  // 상단: A-3-1(취업진로팀) · A-3-2 · A-3-3~5(플리마켓)
  {
    label: "1",
    x: 98.3887,
    y: 123.389,
    width: BOOTH_WIDTH,
    locationKey: "A-3-1",
  },
  {
    label: "2",
    x: 117.822,
    y: 123.389,
    width: BOOTH_WIDTH,
    locationKey: "A-3-2",
  },
  {
    label: "3",
    x: 137.258,
    y: 123.389,
    width: BOOTH_WIDTH,
    locationKey: "A-3-3",
  },
  {
    label: "4",
    x: 155.916,
    y: 123.389,
    width: BOOTH_WIDTH,
    locationKey: "A-3-4",
  },
  {
    label: "5",
    x: 175.352,
    y: 123.389,
    width: BOOTH_WIDTH,
    locationKey: "A-3-5",
  },
  // 하단: A-3-13(포토이즘) · A-3-14~17(플리마켓)
  {
    label: "6",
    x: 98.3887,
    y: 176.389,
    width: BOOTH_WIDTH,
    locationKey: "A-3-13",
  },
  {
    label: "7",
    x: 117.822,
    y: 176.389,
    width: BOOTH_WIDTH,
    locationKey: "A-3-14",
  },
  {
    label: "8",
    x: 137.258,
    y: 176.389,
    width: BOOTH_WIDTH,
    locationKey: "A-3-15",
  },
  {
    label: "9",
    x: 156.389,
    y: 176.389,
    width: BOOTH_WIDTH,
    locationKey: "A-3-16",
  },
  {
    label: "10",
    x: 175.389,
    y: 176.389,
    width: BOOTH_WIDTH,
    locationKey: "A-3-17",
  },
];

function findAdditionalZoneBooth(
  activeSlotId: string,
): FestivalListItem | undefined {
  return externalCompanyList.find((item) =>
    matchesZoneBoothNo(item, "additional", activeSlotId),
  );
}

function resolveActiveLocation(
  activeSlotId?: string | null,
  location?: string | null,
): string | null {
  const fromLocation = parseLocationKey(location);
  if (fromLocation) return fromLocation;

  if (!activeSlotId) return null;

  const booth = findAdditionalZoneBooth(activeSlotId);
  if (!booth) return null;

  const place = booth.boothPlaces?.find(
    (entry) =>
      entry.zone === "additional" &&
      entry.boothNo != null &&
      String(entry.boothNo) === activeSlotId,
  );
  if (place) return parseLocationKey(place.location);

  return parseLocationKey(booth.location ?? undefined);
}

type Props = {
  activeSlotId?: string | null;
  location?: string | null;
};

function BoothSlotShape({
  slot,
  isActive,
}: {
  slot: AdditionalZoneSlot;
  isActive: boolean;
}) {
  const cx = slot.x + slot.width / 2;
  const cy = slot.y + BOOTH_HEIGHT / 2;

  return (
    <g
      id={`booth-${slot.label}-${slot.locationKey}`}
      data-booth-no={slot.label}
      data-location={slot.locationKey}
      className={isActive ? "is-active" : undefined}
    >
      <rect
        className="booth-fill"
        x={slot.x}
        y={slot.y}
        width={slot.width}
        height={BOOTH_HEIGHT}
        rx={0.5}
      />
      <text
        className="booth-label"
        x={cx}
        y={cy}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {slot.label}
      </text>
    </g>
  );
}

export default function AdditionalZoneMinimap({
  activeSlotId,
  location,
}: Props) {
  const activeLocation = resolveActiveLocation(activeSlotId, location);

  return (
    <svg
      viewBox="0 0 350 230"
      className="h-auto w-full"
      role="img"
      aria-label="추가 구역 미니맵"
    >
      <defs>
        <style>{`
          .booth-fill {
            fill: #e4e4e4;
            stroke: #dbdbdb;
            stroke-width: 0.78;
            transition: fill 0.2s ease, stroke 0.2s ease;
          }
          .booth-label {
            fill: #808080;
            font-size: 9px;
            font-weight: 700;
            pointer-events: none;
            user-select: none;
          }
          .area-label {
            fill: #9b9b9b;
            font-size: 7.5px;
            font-weight: 600;
            pointer-events: none;
            user-select: none;
          }
          g.is-active .booth-fill {
            fill: #0b89ff;
            stroke: #0b89ff;
            stroke-width: 1.1;
          }
          g.is-active .booth-label {
            fill: #ffffff;
          }
        `}</style>
      </defs>

      <rect width="350" height="230" fill="white" />

      {/* 한누리관 */}
      <path
        d="M200.48 76.8755L201.547 115.905C216.005 116.185 248.81 116.759 264.36 116.82C279.911 116.881 300.366 115.168 308.65 114.304L307.735 78.0187L200.48 76.8755Z"
        fill="#E4E4E4"
        stroke="#E9E9E8"
        strokeWidth="0.777397"
      />
      <path
        d="M200.48 20.2363L201.547 59.2661C216.005 59.5456 248.81 60.1198 264.36 60.1807C279.911 60.2417 300.366 58.529 308.65 57.665L307.735 21.3795L200.48 20.2363Z"
        fill="#F8F8F6"
        stroke="#E9E9E8"
        strokeWidth="0.777397"
      />
      <text
        className="area-label"
        x="254"
        y="98"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        한누리관
      </text>

      <g id="booths" data-zone="additional">
        {ALL_SLOTS.map((slot) => {
          const isActive =
            activeLocation != null && slot.locationKey === activeLocation;
          return (
            <BoothSlotShape
              key={`${slot.label}-${slot.locationKey}`}
              slot={slot}
              isActive={isActive}
            />
          );
        })}
      </g>
    </svg>
  );
}
