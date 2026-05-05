export type LostItemCategory =
  | "전체"
  | "지갑"
  | "전자기기"
  | "액세서리"
  | "가방"
  | "기타";

export type LostItemStatus = "보관중" | "인계완료";

export type LostItem = {
  id: string;
  title: string; // 분실물 이름
  foundAt: string; // "2026.05.28 19:40"
  foundLocation: string; // "학생회관 앞 부스라인 10F"
  category: Exclude<LostItemCategory, "전체">;
  status: LostItemStatus;
  imageUrl?: string;
  descriptionLines?: string[];
};

export const lostItemCategories: LostItemCategory[] = [
  "전체",
  "지갑",
  "전자기기",
  "액세서리",
  "가방",
  "기타",
];

export const lostItems: LostItem[] = [
  {
    id: "lost-1",
    title: "분실물 이름",
    foundAt: "2026.05.28 19:40",
    foundLocation: "[학생회관] 앞 부스라인 10F",
    category: "전자기기",
    status: "보관중",
    descriptionLines: ["분실물 설명 1줄", "분실물 설명 2줄", "분실물 설명 3줄"],
  },
  {
    id: "lost-2",
    title: "분실물 이름",
    foundAt: "2026.05.28 19:40",
    foundLocation: "[학생회관] 앞 부스라인 10F",
    category: "지갑",
    status: "보관중",
  },
  {
    id: "lost-3",
    title: "분실물 이름",
    foundAt: "2026.05.28 19:40",
    foundLocation: "[대운동장] 중앙 출입구",
    category: "가방",
    status: "인계완료",
  },
  {
    id: "lost-4",
    title: "분실물 이름",
    foundAt: "2026.05.28 19:40",
    foundLocation: "[학생회관] 1층 안내데스크",
    category: "액세서리",
    status: "보관중",
  },
  {
    id: "lost-5",
    title: "분실물 이름",
    foundAt: "2026.05.28 19:40",
    foundLocation: "[학생회관] 앞 부스라인 10F",
    category: "기타",
    status: "보관중",
  },
];

export function getLostItemById(id: string) {
  return lostItems.find((i) => i.id === id);
}
