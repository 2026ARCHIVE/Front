export type EventItem = {
  id: string;
  title: string;
  timeRange: string; // "10:00 - 22:00"
  location: string; // "학생회관 앞 A 1-5"
  imageUrl?: string; // 실제 이미지
  descriptionLines?: string[]; // 회색 박스(이벤트 설명 1/2/3 같은)
  howToSteps?: string[]; // 진행 방법
  benefitTitle?: string; // 혜택 안내 제목
  benefitDescription?: string; // 혜택 상세 텍스트
  benefitPlaceholder?: boolean; //  회색 박스 영역
  notes?: string[]; // 이벤트 유의사항
};

export const eventItems: EventItem[] = [
  {
    id: "dress-code",
    title: "드레스 코드",
    timeRange: "10:00 - 22:00",
    location: "학생회관 앞 A 1-5",
    descriptionLines: ["이벤트 설명 1줄", "이벤트 설명 2줄", "이벤트 설명 3줄"],
    howToSteps: ["진행 방법 1번째", "진행 방법 2번째", "진행 방법 3번째"],
    benefitTitle: "혜택 상세 텍스트",
    benefitDescription:
      "학과 행사 참여자 중 베스트 드레서 5인을 선정해 경품을 제공합니다.",
    notes: [
      " 부상 예방을 위해 참가자는 빠르게 달리거나 격렬하게 움직일 때 주의",
      "농부 역할을 맡은 사람은 과도하게 힘을 주지 않도록 주의",
      "체험 전, 게임 규칙과 안전 수칙을 참가자들에게 충분히 안내",
      "농부는 도망자와 적당한 거리를 두고 추격하며, 다칠 위험을 줄인다",
      "게임 중 수위(비속어, 과격한 행위) 등에 주의하고, 게임 종료 후 청소는 반드시 진행",
      "대회 현장에서 음료수 및 간식류는 현장 참여자들에게 건강을 위해 수량이 한정될 수 있음",
    ],
  },
  {
    id: "stamp-tour",
    title: "스탬프 투어",
    timeRange: "10:00 - 22:00",
    location: "학생회관 앞 A 1-5",
    descriptionLines: ["이벤트 설명 1줄", "이벤트 설명 2줄", "이벤트 설명 3줄"],
    howToSteps: ["진행 방법 1번째", "진행 방법 2번째", "진행 방법 3번째"],
    benefitTitle: "혜택 안내",
    benefitPlaceholder: true,
    notes: [
      "부상 매입을 위해 참가자는 본인 확인(학생증)과 재학증명서(혹은 학적 증명) 지참 필수",
      "노션 업로드 양식 참조 후 각종 정보 누락되도록 주의",
    ],
  },
  // 목록 스켈레톤 느낌용 더미
  {
    id: "event-1",
    title: "이벤트 이름",
    timeRange: "10:00 - 22:00",
    location: "이벤트 장소",
  },
  {
    id: "event-2",
    title: "이벤트 이름",
    timeRange: "10:00 - 22:00",
    location: "이벤트 장소",
  },
  {
    id: "event-3",
    title: "이벤트 이름",
    timeRange: "10:00 - 22:00",
    location: "이벤트 장소",
  },
  {
    id: "event-4",
    title: "이벤트 이름",
    timeRange: "10:00 - 22:00",
    location: "이벤트 장소",
  },
];

export function getEventById(id: string) {
  return eventItems.find((e) => e.id === id);
}
