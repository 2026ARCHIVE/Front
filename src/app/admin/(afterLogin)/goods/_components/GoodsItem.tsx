"use client";
import Image from "next/image";
import React from "react";
import { Goods } from "../page";

export default function GoodsItem({
  id,
  name,
  description,
  isSoldOut,
  imgUrl,
}: Goods) {
  const [soldOut, setSoldOut] = React.useState(isSoldOut);
  const toggleSoldOut = () => {
    setSoldOut((prev) => !prev);
    // TODO: API 호출하여 재고 상태 업데이트
  };
  return (
    <div className="relative flex flex-row items-center space-x-4">
      <Image
        priority
        width={200}
        height={200}
        src={imgUrl}
        alt={name}
        className="h-32 w-32 aspect-square object-cover"
      />
      <div className="flex flex-col gap-2">
        <h3 className="mt-2 text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        {soldOut === true ? (
          <button
            onClick={toggleSoldOut}
            className="mt-2 rounded bg-red-500 px-4 py-2 text-sm text-white font-bold"
          >
            재고소진
          </button>
        ) : (
          <button
            onClick={toggleSoldOut}
            className="mt-2 rounded bg-green-500 px-4 py-2 text-sm text-white font-bold"
          >
            판매중
          </button>
        )}
      </div>
    </div>
  );
}
