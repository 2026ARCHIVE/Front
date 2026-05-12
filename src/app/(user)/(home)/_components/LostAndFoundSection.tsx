import React from "react";
import SectionLayout from "./SectionLayout";
import Link from "next/link";
import { fetchLostItems } from "../../lost-and-found/_data/lostAndFoundData";

export default async function LostAndFoundSection() {
  const items = await fetchLostItems();
  return (
    <SectionLayout title="분실물 안내" link="/lost-and-found">
      {items.slice(0, 3).map((item) => (
        <Link
          key={item.id}
          href={`/lost-and-found/${item.id}`}
          aria-label={`${item.title} 상세로 이동`}
          className="block w-30 h-40 shrink-0 snap-start bg-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 active:scale-[0.98] transition-transform"
        />
      ))}
    </SectionLayout>
  );
}
