import React from "react";
import Link from "next/link";
import SectionLayout from "./SectionLayout";
import { eventItems } from "../../event/_data/eventData";

export default function EventSection() {
  return (
    <SectionLayout title="대동제 한정 이벤트" link="/event">
      {/* 
        1. 시안처럼 대략 120x120px 크기의 회색 배경(bg-gray-300) 사각형
        2. 가로 스크롤 시 밀려 찌그러지지 않도록 shrink-0 필수
      */}
      {eventItems.slice(0, 4).map((item) => (
        <Link
          key={item.id}
          href={`/event/${item.id}`}
          aria-label={`${item.title} 상세로 이동`}
          className="block w-30 h-30 shrink-0 snap-start bg-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 active:scale-[0.98] transition-transform"
        />
      ))}
    </SectionLayout>
  );
}
