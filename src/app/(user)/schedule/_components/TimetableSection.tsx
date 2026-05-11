"use client";

import React, { useState } from "react";
import { type ScheduleItem } from "../_data/scheduleData";

function formatTimeRange(item: ScheduleItem) {
  return item.end ? `${item.start} - ${item.end}` : item.start;
}

function formatDetailTimeRange(
  item: NonNullable<ScheduleItem["details"]>[number],
) {
  return item.end ? `${item.start} - ${item.end}` : item.start;
}

const expandableTitles = new Set([
  "동아리공연",
  "연예인 초청 공연",
  "연예인 초청공연",
]);

type Props = {
  items: ScheduleItem[];
};

export default function TimetableSection({ items }: Props) {
  const [expandedTitles, setExpandedTitles] = useState<Set<string>>(new Set());

  const toggleExpanded = (title: string) => {
    setExpandedTitles((prev) => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  };

  const handleToggleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    title: string,
  ) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    toggleExpanded(title);
  };

  return (
    <section className="py-6.25">
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
            {items.map((item) => {
              const canExpand =
                expandableTitles.has(item.title) &&
                Boolean(item.details?.length);
              const isExpanded = expandedTitles.has(item.title);

              return (
                <article key={item.id} className="flex flex-col gap-3">
                  <div
                    role={canExpand ? "button" : undefined}
                    tabIndex={canExpand ? 0 : undefined}
                    onClick={
                      canExpand ? () => toggleExpanded(item.title) : undefined
                    }
                    onKeyDown={
                      canExpand
                        ? (event) => handleToggleKeyDown(event, item.title)
                        : undefined
                    }
                    className={canExpand ? "cursor-pointer" : undefined}
                  >
                    <div className="flex items-center gap-4">
                      <span className="border border-solid border-[#D2D9DF] px-1 py-0.5 text-[11px] font-bold text-custom-gray">
                        {formatTimeRange(item)}
                      </span>
                    </div>
                    <div className="mt-3 flex items-end justify-between gap-4">
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
                      {canExpand && (
                        <span className="shrink-0 text-[12px] font-semibold text-custom-gray opacity-40">
                          {isExpanded ? "간략히보기" : "전체보기"}
                        </span>
                      )}
                    </div>
                  </div>
                  {canExpand && isExpanded && (
                    <div className="-mx-6.25 flex flex-col gap-6 bg-[#F1F1F2] px-6.25 py-6">
                      {item.details?.map((detail) => (
                        <div key={detail.id} className="flex flex-col gap-3">
                          <div className="flex items-center gap-4">
                            <span className="border border-solid border-[#D2D9DF] px-1 py-0.5 text-[11px] font-bold text-custom-gray">
                              {formatDetailTimeRange(detail)}
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="text-[14px] font-bold text-black">
                              {detail.title}
                            </div>
                            {detail.description && (
                              <div className="text-[12px] font-semibold text-[#A6AFB7]">
                                {detail.description}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
