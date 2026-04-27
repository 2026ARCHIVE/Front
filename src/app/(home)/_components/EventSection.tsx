import React from "react";
import SectionLayout from "./SectionLayout";

export default function EventSection() {
  return (
    <SectionLayout title="대동제 한정 이벤트" link="/event">
      {/* 
        1. 시안처럼 대략 120x120px 크기의 회색 배경(bg-gray-300) 사각형
        2. 가로 스크롤 시 밀려 찌그러지지 않도록 shrink-0 필수
      */}
      <div className="w-30 h-30 shrink-0 bg-[#E0E0E0] rounded-lg"></div>
      <div className="w-30 h-30 shrink-0 bg-[#E0E0E0] rounded-lg"></div>
      <div className="w-30 h-30 shrink-0 bg-[#E0E0E0] rounded-lg"></div>
      <div className="w-30 h-30 shrink-0 bg-[#E0E0E0] rounded-lg"></div>
    </SectionLayout>
  );
}
