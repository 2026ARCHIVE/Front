"use client";

import React, { useMemo, useState } from "react";
import { type ScheduleItem } from "../_data/scheduleData";

function formatTimeRange(item: ScheduleItem) {
  return item.end ? `${item.start} - ${item.end}` : item.start;
}

type Props = {
  items: ScheduleItem[];
  initialVisibleCount?: number;
};

export default function TimetableSection({
  items,
  initialVisibleCount = 3,
}: Props) {
  const [expanded, setExpanded] = useState(false);

  const visibleItems = useMemo(() => {
    return expanded ? items : items.slice(0, initialVisibleCount);
  }, [expanded, initialVisibleCount, items]);

  return (
    <section className="pt-6.25">
      <div className="flex items-end justify-between">
        <h3 className="text-[21px] font-bold text-custom-gray">타임테이블</h3>
      </div>

      {items.length === 0 ? (
        <div className="mt-3 text-[12px] font-semibold text-custom-darkgray">
          선택한 날짜에 등록된 일정이 없어요.
        </div>
      ) : (
        <div className="mt-3">
          <div className="flex flex-col gap-6">
            {visibleItems.map((item) => (
              <article key={item.id} className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <span className="border border-solid border-[#D2D9DF] px-1 py-0.5 text-[11px] font-bold text-custom-gray">
                    {formatTimeRange(item)}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-[14px] font-bold text-black">
                    {item.title}
                  </div>
                  {item.description && (
                    <div className="text-[12px] font-semibold text-[#A6AFB7]">
                      {item.description}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {items.length > initialVisibleCount && (
            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                className="text-[12px] font-semibold text-custom-gray opacity-40"
              >
                {expanded ? "간략히보기" : "전체보기"}
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
