"use client";

import Link from "next/link";
import React from "react";
import { type EventItem } from "../_data/eventData";

type Props = {
  item: EventItem;
};

function Thumbnail({ hasImage }: { hasImage: boolean }) {
  return (
    <div className="h-25 w-25 shrink-0 overflow-hidden rounded bg-gray-200">
      {hasImage ? <div className="h-full w-full bg-gray-200" /> : null}
    </div>
  );
}

export default function EventListItem({ item }: Props) {
  return (
    <Link href={`/event/${item.id}`} className="flex gap-5">
      <Thumbnail hasImage={Boolean(item.imageUrl)} />
      <div className="min-w-0 ">
        <div className="text-[18px] font-bold text-custom-gray truncate">
          {item.title}
        </div>
        <div className="mt-2 flex flex-col gap-1  text-[12px] font-semibold text-custom-gray opacity-40">
          <div className="mt-2.5 flex items-center gap-1">
            <span>운영 시간 :</span>
            <span>{item.timeRange}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>장소 :</span>
            <span className="truncate">{item.location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
