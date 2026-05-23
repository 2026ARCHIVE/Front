import React from "react";
import Link from "next/link";
import Image from "next/image";
import SectionLayout from "./SectionLayout";
import { fetchHomeEvents } from "../../event/_data/eventData";

export default async function EventSection() {
  const items = await fetchHomeEvents();
  return (
    <SectionLayout title="대동제 한정 이벤트" link="/event">
      {items.map((item, idx) => {
        const thumbSrc =
          item.homeThumbnailUrl ?? item.listThumbnailUrl ?? item.imageUrl;
        const label = item.homeLabel ?? item.title;
        return (
          <Link
            key={item.id}
            href={`/event/${item.id}`}
            aria-label={`${label} 상세로 이동`}
            className="flex w-30 shrink-0 snap-start flex-col items-center bg-transparent focus:outline-none focus:ring-2 focus:ring-black/20 active:scale-[0.98] transition-transform rounded-lg"
          >
            <div className="relative h-30 w-30 overflow-hidden bg-transparent">
              {thumbSrc ? (
                <Image
                  src={thumbSrc}
                  alt={`${label} 썸네일`}
                  fill
                  sizes="120px"
                  className="object-contain"
                  priority={idx === 0}
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              ) : null}
            </div>
            <span className="mt-[10px] w-full text-center text-[13px] font-semibold text-custom-gray">
              {label}
            </span>
          </Link>
        );
      })}
    </SectionLayout>
  );
}
