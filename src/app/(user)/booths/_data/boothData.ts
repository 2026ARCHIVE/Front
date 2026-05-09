import type { FestivalListItem } from "@/data/festival/types";
import { experienceList } from "@/data/festival/experiences";

export interface BoothData {
  id: number;
  name: string; // 부스 이름
  category: string; // 필터 기준 (학과, 동아리, 푸드트럭 등)
  host: string; // 주체 (예: 컴퓨터공학과, 댄스동아리)
  time: string; // 운영 시간
  location: string; // 위치 (예: 노천극장, 학생회관 앞)
  imageUrl: string; // 부스 썸네일 이미지
}

const experienceCategoryById: Record<number, string> = {
  1: "학과",
  2: "동아리",
  3: "동아리",
  4: "동아리",
  5: "동아리",
  6: "학과",
  7: "동아리",
  8: "학과",
  9: "동아리",
  10: "동아리",
  11: "동아리",
  12: "학과",
  13: "동아리",
  14: "동아리",
  15: "동아리",
  16: "동아리",
  17: "학과",
  18: "학과",
  19: "학과",
  20: "동아리",
  21: "동아리",
  22: "동아리",
  23: "학과",
  24: "동아리",
  25: "동아리",
  26: "동아리",
  27: "학과",
  28: "동아리",
  29: "학과",
  30: "동아리",
  31: "학과",
  32: "학과",
  33: "학과",
  34: "동아리",
};

function festivalItemToBoothData(item: FestivalListItem): BoothData {
  const category = experienceCategoryById[item.id] ?? "동아리";
  return {
    id: item.id,
    name: item.name,
    category,
    host: item.host ?? "—",
    time: item.time ?? "—",
    location: item.location ?? "—",
    imageUrl: item.imageUrl,
  };
}

export const dummyBooths: BoothData[] = experienceList.map(
  festivalItemToBoothData,
);
