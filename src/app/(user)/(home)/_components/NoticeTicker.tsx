"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Notice {
  id: number;
  title: string;
}

const dummyNotices: Notice[] = [
  { id: 1, title: "테스트 공지사항 1입니다." },
  { id: 2, title: "테스트 공지사항 2입니다." },
  { id: 3, title: "테스트 공지사항 3입니다." },
  { id: 4, title: "테스트 공지사항 4입니다." },
  { id: 5, title: "테스트 공지사항 5입니다." },
];

export default function NoticeTicker() {
  const [notices, setNotices] = useState<Notice[]>(dummyNotices);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % notices.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [notices.length]);

  return (
    <div className="flex items-center justify-between bg-custom-gray px-6.5 py-3 text-white">
      <div className="flex items-center w-full h-5 overflow-hidden">
        <span className="font-bold text-[14px] shrink-0 mr-4">공지사항</span>

        <div className="flex-1 h-full overflow-hidden">
          <ul
            className="flex flex-col transition-transform duration-500 ease-in-out"
            style={{ transform: `translateY(-${currentIndex * 20}%)` }}
          >
            {notices.map((notice) => (
              <li
                onClick={() => {
                  router.push(`/notice/${notice.id}`);
                }}
                key={notice.id}
                className="h-5 flex items-center text-[14px] text-white truncate"
              >
                {notice.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Image
        src="/Home/arrow.svg"
        alt="Arrow Right"
        width={8}
        height={8}
        priority
        className="w-auto h-auto"
      />
    </div>
  );
}
