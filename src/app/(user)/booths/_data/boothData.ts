// src/app/booths/_data/boothData.ts

export interface BoothData {
  id: number;
  name: string; // 부스 이름
  category: string; // 필터 기준 (학과, 동아리, 푸드트럭 등)
  host: string; // 주체 (예: 컴퓨터공학과, 댄스동아리)
  time: string; // 운영 시간
  location: string; // 위치 (예: 노천극장, 학생회관 앞)
  imageUrl: string; // 부스 썸네일 이미지
}

export const dummyBooths: BoothData[] = [
  // 1. 학과
  {
    id: 1,
    name: "컴공인의 밤, 코딩 포차",
    category: "학과",
    host: "컴퓨터공학과 학생회",
    time: "18:00 - 23:00",
    location: "미래백년관 앞",
    imageUrl: "/booths/dummy_booth.png",
  },
  {
    id: 2,
    name: "디자인과 초상화 공방",
    category: "학과",
    host: "디자인학부",
    time: "10:00 - 17:00",
    location: "노천극장",
    imageUrl: "/booths/dummy_booth.png",
  },
  {
    id: 3,
    name: "경영대칵테일바로경영",
    category: "학과",
    host: "경영학부 학생회",
    time: "17:00 - 23:00",
    location: "학생회관 앞 광장",
    imageUrl: "/booths/dummy_booth.png",
  },

  // 2. 동아리
  {
    id: 4,
    name: "비트매니아 귀신의 집",
    category: "동아리",
    host: "루트(댄스동아리)",
    time: "19:00 - 24:00",
    location: "학생회관 1층",
    imageUrl: "/booths/dummy_booth.png",
  },
  {
    id: 5,
    name: "폴라로이드 필름마켓",
    category: "동아리",
    host: "빛그림(사진동아리)",
    time: "11:00 - 18:00",
    location: "학술정보관 로비",
    imageUrl: "/booths/dummy_booth.png",
  },
  {
    id: 6,
    name: "버스킹 IN 사슴축제",
    category: "동아리",
    host: "소리사랑(밴드동아리)",
    time: "12:00 - 20:00",
    location: "노천극장 앞 무대",
    imageUrl: "/booths/dummy_booth.png",
  },

  // 3. 외부업체
  {
    id: 7,
    name: "레드불 스튜디오",
    category: "외부업체",
    host: "레드불 코리아",
    time: "10:00 - 20:00",
    location: "대운동장 앞",
    imageUrl: "/booths/dummy_booth.png",
  },
  {
    id: 8,
    name: "인생네컷 x 상명대",
    category: "외부업체",
    host: "인생네컷",
    time: "10:00 - 22:00",
    location: "미래백년관 로비",
    imageUrl: "/booths/dummy_booth.png",
  },
  {
    id: 9,
    name: "에브리타임 룰렛 이벤트",
    category: "외부업체",
    host: "에브리타임",
    time: "11:00 - 18:00",
    location: "학생회관 앞",
    imageUrl: "/booths/dummy_booth.png",
  },

  // 4. 푸드트럭
  {
    id: 10,
    name: "불맛 야끼소바 타코야끼",
    category: "푸드트럭",
    host: "푸드트럭 연합",
    time: "15:00 - 24:00",
    location: "노천극장 주차장",
    imageUrl: "/booths/dummy_booth.png",
  },
  {
    id: 11,
    name: "사슴이가 구워주는 츄러스",
    category: "푸드트럭",
    host: "마이쭈러스",
    time: "15:00 - 24:00",
    location: "노천극장 주차장",
    imageUrl: "/booths/dummy_booth.png",
  },
  {
    id: 12,
    name: "수박화채 & 생과일쥬스",
    category: "푸드트럭",
    host: "썸머후르츠",
    time: "12:00 - 22:00",
    location: "노천극장 주차장",
    imageUrl: "/booths/dummy_booth.png",
  },

  // 5. 총학부스
  {
    id: 13,
    name: "대동제 굿즈 판매소",
    category: "총학부스",
    host: "제 60대 총학생회",
    time: "10:00 - 20:00",
    location: "학술정보관 앞 부스",
    imageUrl: "/booths/dummy_booth.png",
  },
  {
    id: 14,
    name: "스탬프 투어 본부",
    category: "총학부스",
    host: "제 60대 총학생회",
    time: "10:00 - 18:00",
    location: "미래백년관 앞",
    imageUrl: "/booths/dummy_booth.png",
  },
  {
    id: 15,
    name: "총학생회 응급/미아 보호소",
    category: "총학부스",
    host: "제 60대 총학생회 학생복지국",
    time: "10:00 - 24:00",
    location: "노천극장 종합본부",
    imageUrl: "/booths/dummy_booth.png",
  },

  // 6. 교내부서
  {
    id: 16,
    name: "취업지원센터 퍼스널컬러 진단",
    category: "교내부서",
    host: "상명대학교 취업지원센터",
    time: "10:00 - 17:00",
    location: "학생회관 2층",
    imageUrl: "/booths/dummy_booth.png",
  },
  {
    id: 17,
    name: "국제교류팀 교환학생 상담소",
    category: "교내부서",
    host: "국제교류처",
    time: "13:00 - 17:00",
    location: "미래백년관 1층 로비",
    imageUrl: "/booths/dummy_booth.png",
  },
  {
    id: 18,
    name: "심리건강 스트레스 타파!",
    category: "교내부서",
    host: "학생상담센터",
    time: "11:00 - 16:00",
    location: "학술정보관 1층",
    imageUrl: "/booths/dummy_booth.png",
  },
];
