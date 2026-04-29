// NOTE: 실제 데이터로 변경 예정
interface ScheduleItem {
  id: string;
  date: string;
  start: string;
  end?: string;
  title: string;
  description?: string;
}

const scheduleDays = [
  { date: "2026-05-27", label: "5/27 (수)" },
  { date: "2026-05-28", label: "5/28 (목)" },
] as const;

interface LineupItem {
  id: string;
  date: string;
  title: string;
  timeRange?: string; // "20:00 - 21:00"
  imageUrl?: string;
}

const scheduleItems: ScheduleItem[] = [
  {
    id: "d1-1",
    date: "2026-05-27",
    start: "19:50",
    end: "20:00",
    title: "개막 안내",
    description: "운영 안내 및 유의사항",
  },
  {
    id: "d1-2",
    date: "2026-05-27",
    start: "11:30",
    end: "18:00",
    title: "부스 운영",
    description: "운영 안내 및 유의사항",
  },
  {
    id: "d1-3",
    date: "2026-05-27",
    start: "19:50",
    end: "20:00",
    title: "개막 안내",
    description: "운영 안내 및 유의사항",
  },
  {
    id: "d1-4",
    date: "2026-05-27",
    start: "11:30",
    end: "18:00",
    title: "부스 운영",
    description: "운영 안내 및 유의사항",
  },
  {
    id: "d1-5",
    date: "2026-05-27",
    start: "19:50",
    end: "20:00",
    title: "개막 안내",
    description: "운영 안내 및 유의사항",
  },
  {
    id: "d1-6",
    date: "2026-05-27",
    start: "11:30",
    end: "18:00",
    title: "부스 운영",
    description: "운영 안내 및 유의사항",
  },
  {
    id: "d1-7",
    date: "2026-05-27",
    start: "19:00",
    end: "20:00",
    title: "메인 무대 공연",
    description: "라인업/타임테이블 추후 공개",
  },
  {
    id: "d2-1",
    date: "2026-05-28",
    start: "11:00",
    end: "18:00",
    title: "부스 운영",
  },
  {
    id: "d2-2",
    date: "2026-05-28",
    start: "13:00",
    end: "16:00",
    title: "체험 프로그램",
    description: "현장 접수/선착순",
  },
  {
    id: "d2-3",
    date: "2026-05-28",
    start: "19:00",
    end: "21:00",
    title: "메인 무대 공연",
    description: "라인업/타임테이블 추후 공개",
  },
  {
    id: "d2-4",
    date: "2026-05-28",
    start: "11:00",
    end: "18:00",
    title: "부스 운영",
  },
  {
    id: "d2-5",
    date: "2026-05-28",
    start: "19:00",
    end: "21:30",
    title: "피날레 공연",
    description: "피날레 프로그램/출연진 추후 공개",
  },
];

const lineupItems: LineupItem[] = [
  {
    id: "l1-1",
    date: "2026-05-27",
    title: "블랙핑크",
    timeRange: "20:00 - 21:00",
  },
  {
    id: "l1-2",
    date: "2026-05-27",
    title: "뉴진스",
    timeRange: "21:00 - 23:00",
  },
  {
    id: "l2-1",
    date: "2026-05-28",
    title: "라인업",
    timeRange: "20:00 - 23:00",
  },
  {
    id: "l3-1",
    date: "2026-05-29",
    title: "라인업",
    timeRange: "20:00 - 23:30",
  },
];

export {
  type LineupItem,
  type ScheduleItem,
  scheduleDays,
  scheduleItems,
  lineupItems,
};
