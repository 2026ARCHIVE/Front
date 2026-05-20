import type { FestivalListItem } from "@/data/festival/types";
import { experienceList } from "@/data/festival/experiences";
import { foodTruckList } from "@/data/festival/food-trucks";

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
  // AR∙VR 미디어디자인 전공
  1: "학과",
  // CCC
  2: "동아리",
  // CRUNK BRAIN
  3: "동아리",
  // RENEW
  4: "동아리",
  // STEAL
  5: "동아리",
  // 건설시스템공학과
  6: "학과",
  // 겟아웃
  7: "동아리",
  // 경영공학과
  8: "학과",
  // 테온
  9: "동아리",
  // 교육방송국 SMBS
  10: "동아리",
  // 그래픽미디어랩
  11: "동아리",
  // 그린화학공학과
  12: "학과",
  // 다다름
  13: "동아리",
  // 다크니스
  14: "동아리",
  // 마법연구회
  15: "동아리",
  // 무대미술전공
  16: "학과",
  // 간호학과
  17: "학과",
  // 시스템반도체공학과
  18: "학과",
  // 실오라기
  19: "동아리",
  // 싸이클링 히트
  20: "동아리",
  // 아소부
  21: "동아리",
  // 연극전공
  22: "학과",
  // 옴므, 팜므, 헤비메탈
  23: "동아리",
  // 요쿡
  24: "동아리",
  // 연
  25: "동아리",
  // 인더스트리얼디자인전공
  26: "학과",
  // 치즈
  27: "동아리",
  // 패션디자인전공
  28: "학과",
  // 폴리오
  29: "동아리",
  // 글로벌금융경영학부
  30: "학과",
  // 소프트웨어학과
  31: "학과",
  // 그린스마트시티학과
  32: "학과",
  // 디어스
  33: "동아리",
  // CLUB C
  34: "동아리",
  // 스포츠융합학부
  35: "학과",
};

// 일반 부스 맵핑
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

// 푸드트럭 맵핑
function foodTruckItemToBoothData(item: FestivalListItem): BoothData {
  return {
    id: item.id + 100, // ID 중복 방지
    name: item.name,
    category: "푸드트럭", // 푸드트럭으로 고정 분류
    host: item.name, // 호스트명은 일단 푸드트럭의 이름으로 통일
    time: item.time ?? "—",
    location: item.location ?? "—",
    imageUrl: item.imageUrl,
  };
}

// 기존 booth 배열에서 map 처리된 내용
const experienceBooths = experienceList.map(festivalItemToBoothData);
const foodTruckBooths = foodTruckList.map(foodTruckItemToBoothData);

export const dummyBooths: BoothData[] = [
  ...experienceBooths,
  ...foodTruckBooths,
];
