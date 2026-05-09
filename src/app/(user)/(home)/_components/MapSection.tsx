"use client";

import Link from "next/link";
import React from "react";
import NaverMap from "../../map/_components/NaverMap";
import {
  boothMapPoints,
  festivalMapFocusCenter,
} from "../../map/_data/boothMapPoints";

export default function MapSection() {
  return (
    <div className="mt-6 px-6.25">
      <div className="flex items-center justify-between">
        <div className="text-[18px] font-bold">지도</div>
        <Link
          href="/map"
          className="text-[14px] font-bold text-custom-darkgray"
        >
          더보기
        </Link>
      </div>
      <div className="mt-3">
        <NaverMap
          points={boothMapPoints}
          mapHeightClassName="h-52"
          initialCenter={festivalMapFocusCenter}
          initialZoom={16}
        />
      </div>
    </div>
  );
}
