"use client";
import Image from "next/image";
import React from "react";
import { Goods } from "./GoodsList";
import { useRouter } from "next/navigation";

export default function GoodsListItem({
  id,
  imgUrl,
  name,
  place,
  isSoldOut,
}: Goods) {
  const router = useRouter();

  return (
    <div className="flex flex-row">
      <Image
        src={imgUrl}
        alt={name}
        width={100}
        height={100}
        priority
        className="w-25 h-25 object-cover cursor-pointer shrink-0"
        onClick={() => router.push(`/goods/${id}`)}
      />
      <div className="flex flex-col justify-between py-1 ml-5">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-[18px] font-bold text-black">{name}</h3>
          <p className="text-[13px] text-gray-500">{place}</p>
        </div>

        {isSoldOut ? (
          <p className="text-white bg-red-500 px-2.5 py-1 rounded-md w-fit text-[11px] font-semibold">
            품절
          </p>
        ) : (
          <p className="text-white bg-[#0B89FF] px-2.5 py-1 rounded-md w-fit text-[11px] font-semibold">
            판매중
          </p>
        )}
      </div>
    </div>
  );
}
