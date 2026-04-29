"use client";

import React, { useMemo, useState } from "react";
import { eventItems } from "../_data/eventData";
import EventListItem from "./EventListItem";
import EventSearchInput from "./EventSearchInput";

export default function EventListView() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return eventItems;
    return eventItems.filter((e) => e.title.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="px-6.25 pb-6.25">
      <EventSearchInput value={query} onChange={setQuery} />

      <div className="mt-6.25 flex flex-col gap-5">
        {filtered.map((item) => (
          <EventListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
