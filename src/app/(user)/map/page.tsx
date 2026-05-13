"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Filter from "../booths/_components/Filter";
import BottomSheet from "./_components/BottomSheet";
import NaverMap from "./_components/NaverMap";
import {
  boothMapPoints,
  type BoothMapPoint,
  type MapCategory,
} from "./_data/boothMapPoints";
import { experienceList, foodTruckList } from "@/data/festival";
import Image from "next/image";
import Link from "next/link";

export default function MapPage() {
  const [active, setActive] = useState<MapCategory>("전체");
  const [sheetMode, setSheetMode] = useState<"체험" | "푸드트럭" | null>(null);
  const filterWrapRef = useRef<HTMLDivElement | null>(null);
  const [sheetTopLimit, setSheetTopLimit] = useState(0);
  const [bottomNavHeight, setBottomNavHeight] = useState(100);
  const filters: MapCategory[] = [
    "전체",
    "화장실",
    "푸드트럭",
    "체험",
    "의무실",
    "흡연구역",
    "무대",
    "운영본부",
  ];

  const points = useMemo(() => {
    if (active === "전체") return boothMapPoints;
    return boothMapPoints.filter((p) => p.category === active);
  }, [active]);

  const handlePointClick = useCallback((p: BoothMapPoint) => {
    if (p.category === "체험") setSheetMode("체험");
    if (p.category === "푸드트럭") setSheetMode("푸드트럭");
  }, []);

  useEffect(() => {
    const el = filterWrapRef.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      setSheetTopLimit(Math.max(0, Math.round(rect.top - 8)));
    };

    update();
    const ro = new ResizeObserver(() => update());
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const nav = document.querySelector<HTMLElement>("nav.fixed.bottom-0");
    if (!nav) return;

    const update = () => {
      const rect = nav.getBoundingClientRect();
      setBottomNavHeight(Math.max(0, Math.round(rect.height)));
    };

    update();
    const ro = new ResizeObserver(() => update());
    ro.observe(nav);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="pb-18">
      <div className="mt-4">
        <div className="px-6.25" ref={filterWrapRef}>
          <Filter
            activeFilter={active}
            filters={filters}
            onFilterChange={(f) => {
              setActive(f as MapCategory);
              setSheetMode(null);
            }}
          />
        </div>
      </div>

      <div className="mt-4">
        <div className="px-6.25">
          <NaverMap points={points} onPointClick={handlePointClick} />
        </div>
      </div>

      {sheetMode && (
        <BottomSheet
          open
          title={sheetMode === "체험" ? "체험 목록" : "푸드트럭 목록"}
          onClose={() => setSheetMode(null)}
          initialSnap="mid"
          bottomInsetPx={bottomNavHeight + 24}
          topLimitPx={sheetTopLimit}
        >
          <div className="space-y-3">
            {(sheetMode === "체험" ? experienceList : foodTruckList).map(
              (item) => {
                const href =
                  sheetMode === "체험"
                    ? `/booths/${item.id}`
                    : `/booths/foodtrucks/${item.id}`;
                return (
                  <Link
                    key={item.id}
                    href={href}
                    className="flex gap-3 rounded-xl border border-black/5 bg-white p-3 active:bg-black/2"
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-black/5">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="min-w-0 flex flex-col gap-0.5">
                      <div className="truncate text-[15px] font-bold leading-snug text-black">
                        {item.name}
                      </div>
                      <div className="line-clamp-2 text-[13px] leading-snug text-custom-gray/85">
                        {item.description}
                      </div>
                    </div>
                  </Link>
                );
              },
            )}
          </div>
        </BottomSheet>
      )}
    </div>
  );
}
