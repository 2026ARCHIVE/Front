"use client";
import React from "react";
import LostItem from "./_components/LostItem";
import WriteButton from "@/components/admin/WriteButton";
import { Loader2 } from "lucide-react";

export interface LostItem {
  id: number;
  itemName: string;
  category: string;
  foundLocation: string;
  imgUrls: string[];
  status: string;
  createdAt: string;
}

const dummyLostItems: LostItem[] = [
  {
    id: 1,
    itemName: "분실물 이름",
    category: "카테고리 1",
    foundLocation: "한누리관 10F",
    imgUrls: [],
    status: "상태 1",
    createdAt: "2026-05-28T19:40:00",
  },
  {
    id: 2,
    itemName: "분실물 이름",
    category: "카테고리 2",
    foundLocation: "한누리관 10F",
    imgUrls: [],
    status: "상태 2",
    createdAt: "2026-05-28T19:40:00",
  },
  {
    id: 3,
    itemName: "분실물 이름",
    category: "카테고리 3",
    foundLocation: "한누리관 10F",
    imgUrls: [],
    status: "상태 3",
    createdAt: "2026-05-28T19:40:00",
  },
];

export default function AdminLostPage() {
  const [lostItems, setLostItems] = React.useState<LostItem[]>([]);
  React.useEffect(() => {
    setTimeout(() => {
      setLostItems(dummyLostItems);
    }, 1000);
  }, []);

  if (lostItems.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-blue-300">
        <Loader2 className="animate-spin" size={40} />
      </div>
    );
  }

  return (
    <div className="flex flex-col relative pb-24">
      {lostItems.map((item) => (
        <LostItem key={item.id} item={item} />
      ))}
      <WriteButton link="/admin/lost/write-and-edit" />
    </div>
  );
}
