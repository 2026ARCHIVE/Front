"use client";
import React, { useEffect, useState } from "react";
import NoticeItem from "./NoticeItem";
import { Loader2 } from "lucide-react";

interface Notice {
  id: number;
  title: string;
  date: Date;
  detail: string;
}
const dummyData: Notice[] = [
  {
    id: 1,
    title: "공지사항 1",
    date: new Date(),
    detail: "공지사항 내용 1",
  },
  {
    id: 2,
    title: "공지사항 2",
    date: new Date(),
    detail: "공지사항 내용 2",
  },
  {
    id: 3,
    title: "공지사항 3",
    date: new Date(),
    detail: "공지사항 내용 3",
  },
  {
    id: 4,
    title: "공지사항 4",
    date: new Date(),
    detail: "공지사항 내용 4",
  },
  {
    id: 5,
    title: "공지사항 5",
    date: new Date(),
    detail: "공지사항 내용 5",
  },
  {
    id: 6,
    title: "공지사항 6",
    date: new Date(),
    detail: "공지사항 내용 6",
  },
];

export default function NoticeBody() {
  const [notices, setNotices] = useState<Notice[]>([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotices(dummyData);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (notices.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-custom-blue" />
      </div>
    );
  }
  return (
    <div className=" relative flex-1">
      {notices.map((notice) => (
        <NoticeItem key={notice.id} notice={notice} />
      ))}
    </div>
  );
}
