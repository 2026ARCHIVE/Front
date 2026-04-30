"use client";

import React, { useMemo, useState } from "react";
import {
  type LostItemCategory,
  lostItems,
} from "../../_data/lostAndFoundData";
import LostAndFoundCategoryTabs from "./LostAndFoundCategoryTabs";
import LostAndFoundEmptyResult from "./LostAndFoundEmptyResult";
import LostAndFoundListItem from "./LostAndFoundListItem";
import LostAndFoundSearchInput from "./LostAndFoundSearchInput";

export default function LostAndFoundListView() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<LostItemCategory>("전체");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return lostItems.filter((i) => {
      const byQuery = !q || i.title.toLowerCase().includes(q);
      const byCategory = category === "전체" || i.category === category;
      return byQuery && byCategory;
    });
  }, [query, category]);

  return (
    <div className="px-6.25 pb-6.25">
      <LostAndFoundSearchInput value={query} onChange={setQuery} />
      <LostAndFoundCategoryTabs value={category} onChange={setCategory} />

      <div className="mt-6.25">
        {filtered.length === 0 ? (
          <LostAndFoundEmptyResult />
        ) : (
          <div className="flex flex-col gap-5">
            {filtered.map((item) => (
              <LostAndFoundListItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

