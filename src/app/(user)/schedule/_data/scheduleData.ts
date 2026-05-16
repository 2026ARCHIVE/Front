// NOTE: 실제 데이터로 변경 예정
interface ScheduleItem {
  id: string;
  date: string;
  start: string;
  end?: string;
  title: string;
  description?: string;
  details?: ScheduleDetailItem[];
}

interface ScheduleDetailItem {
  id: string;
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
  imageUrlHome?: string;
  imageUrlSchedule?: string;
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
    title: "동아리공연",
    description: "운영 안내 및 유의사항",
    details: [
      {
        id: "d1-5-1",
        start: "19:50",
        end: "20:00",
        title: "동아리공연 1",
        description: "노천극장",
      },
      {
        id: "d1-5-2",
        start: "20:00",
        end: "20:10",
        title: "동아리공연 2",
        description: "노천극장",
      },
      {
        id: "d1-5-3",
        start: "20:10",
        end: "20:20",
        title: "동아리공연 3",
        description: "노천극장",
      },
    ],
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
    title: "연예인 초청 공연",
    description: "피날레 프로그램/출연진 추후 공개",
    details: [
      {
        id: "d2-5-1",
        start: "19:20",
        end: "19:50",
        title: "헤이즈",
        description: "노천극장",
      },
      {
        id: "d2-5-2",
        start: "20:00",
        end: "20:30",
        title: "호미들",
        description: "노천극장",
      },
      {
        id: "d2-5-3",
        start: "20:40",
        end: "21:10",
        title: "스테이씨",
        description: "노천극장",
      },
    ],
  },
];

const lineupItems: LineupItem[] = [
  {
    id: "keyveatz",
    date: "2026-05-27",
    title: "키비츠",
    timeRange: "19:30 - 20:00",
    imageUrlHome: "/lineup/keyveatz_2.webp",
    imageUrlSchedule: "/lineup/keyveatz_1.webp",
  },
  {
    id: "coogie",
    date: "2026-05-27",
    title: "쿠기",
    timeRange: "20:10 - 20:40",
    imageUrlHome: "/lineup/coogie.webp",
    imageUrlSchedule: "/lineup/coogie.webp",
  },
  {
    id: "lucy",
    date: "2026-05-27",
    title: "루시",
    timeRange: "20:50 - 21:20",
    imageUrlHome: "/lineup/home_lucy.webp",
    imageUrlSchedule: "/lineup/lucy.webp",
  },
  {
    id: "heize",
    date: "2026-05-28",
    title: "헤이즈",
    timeRange: "19:20 - 19:50",
    imageUrlHome: "/lineup/heize_1.webp",
    imageUrlSchedule: "/lineup/heize_2.webp",
  },
  {
    id: "homies",
    date: "2026-05-28",
    title: "호미들",
    timeRange: "20:00 - 20:30",
    imageUrlHome: "/lineup/home_homies.webp",
    imageUrlSchedule: "/lineup/homies_1.webp",
  },
  {
    id: "stayc",
    date: "2026-05-28",
    title: "스테이씨",
    timeRange: "20:40 - 21:10",
    imageUrlHome: "/lineup/home_stacy.webp",
    imageUrlSchedule: "/lineup/stayc_1.webp",
  },
];

export {
  type LineupItem,
  type ScheduleItem,
  scheduleDays,
  scheduleItems,
  lineupItems,
};
