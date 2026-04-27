"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const getHeaderTitle = () => {
    switch (pathname) {
      case "/":
        return "홈";
      case "/booths":
        return "부스";
      case "/map":
        return "지도";
      case "/schedule":
        return "일정";
      case "/notice":
        return "공지";
      case "/not-found":
        return "에러";
      case "/event":
        return "이벤트";
      case "/lost-and-found":
        return "분실물";
      case "/goods":
        return "굿즈";
      case "/event/[id]":
        return "이벤트 상세";
      case "/booths/[id]":
        return "부스 상세";
      case "/lost-and-found/[id]":
        return "분실물 상세";
      case "/goods/[id]":
        return "굿즈 상세";
      default:
        return "에러";
    }
  };

  if (pathname === "/") {
    return null;
  }
  return (
    <header className="sticky top-0 z-50 flex w-full max-w-md items-center justify-between bg-white px-5 pb-5 pt-18.75 h-31.25">
      <button
        onClick={() => router.back()}
        className="flex h-8 w-8 items-center justify-center rounded-full text-black hover:bg-gray-100 transition-colors cursor-pointer"
        aria-label="뒤로 가기"
      >
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.75 14.75L0.75 7.75L7.75 0.75"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <h1 className="flex-1 text-center text-[20px] font-semibold text-black">
        {getHeaderTitle()}
      </h1>

      <div className="h-8 w-8"></div>
    </header>
  );
}
