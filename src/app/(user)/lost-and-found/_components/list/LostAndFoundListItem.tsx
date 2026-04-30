"use client";

import Link from "next/link";
import React from "react";
import { type LostItem } from "../../_data/lostAndFoundData";

type Props = {
  item: LostItem;
};

function Thumbnail({ hasImage }: { hasImage: boolean }) {
  return (
    <div className="h-25 w-25 shrink-0 overflow-hidden rounded bg-gray-200">
      {hasImage ? <div className="h-full w-full bg-gray-200" /> : null}
    </div>
  );
}

export default function LostAndFoundListItem({ item }: Props) {
  return (
    <Link href={`/lost-and-found/${item.id}`} className="flex gap-5">
      <Thumbnail hasImage={Boolean(item.imageUrl)} />
      <div className="min-w-0 flex flex-col justify-between">
        <div className="text-[18px] font-bold text-custom-gray truncate">
          {item.title}
        </div>
        <div className="flex flex-col gap-1 text-[12px] font-semibold text-custom-gray opacity-40">
          <div className="mt-2.5 flex items-center gap-1">
            <span>{item.foundAt}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="truncate">{item.foundLocation}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

