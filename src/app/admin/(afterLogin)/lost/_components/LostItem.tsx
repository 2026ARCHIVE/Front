"use client";
import React from "react";
import Link from "next/link";
import { LostItem as LostItemType } from "../page";
import Image from "next/image";
import DeleteCheckAlert from "@/components/admin/DeleteCheckAlert";

interface LostItemProps {
  item: LostItemType;
}

export default function LostItem({ item }: LostItemProps) {
  const date = new Date(item.createdAt);
  const formattedDate = `${date.getFullYear()}. ${String(
    date.getMonth() + 1,
  ).padStart(2, "0")}. ${String(date.getDate()).padStart(2, "0")} ${String(
    date.getHours(),
  ).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
  const [isDeleteAlertVisible, setIsDeleteAlertVisible] = React.useState(false);

  return (
    <div className="flex gap-4 p-4 border-b border-gray-100 bg-white">
      <div className="flex flex-col gap-2">
        <div className="w-25 h-25 bg-gray-200 relative overflow-hidden">
          {item.imgUrls && item.imgUrls.length > 0 && (
            <Image
              src={item.imgUrls[0]}
              alt={item.itemName}
              className="object-cover w-full h-full"
              width={100}
              height={100}
              priority
            />
          )}
        </div>
        <div className="flex justify-between mt-1">
          <Link
            href={`/admin/lost/write-and-edit/${item.id}`}
            className="flex items-center justify-center w-[48%] py-1.5 bg-gray-100 text-gray-700 text-xs font-semibold rounded"
          >
            수정
          </Link>
          <button
            type="button"
            className="w-[48%] py-1.5 bg-[#E83C31] text-white text-xs font-semibold rounded"
            onClick={() => setIsDeleteAlertVisible(true)}
          >
            삭제
          </button>
        </div>
      </div>

      <div className="flex flex-col flex-1 py-1">
        <h3 className="text-lg font-bold text-gray-900">{item.itemName}</h3>
        <p className="text-sm text-gray-400 mt-1">{formattedDate}</p>

        <p className="text-sm text-gray-400 mt-auto">
          [습득장소] {item.foundLocation}
        </p>
      </div>
      {isDeleteAlertVisible && (
        <DeleteCheckAlert
          setVisible={setIsDeleteAlertVisible}
          onCancel={() => setIsDeleteAlertVisible(false)}
          onConfirm={() => {
            //TODO: API 호출하여 삭제 처리
            setIsDeleteAlertVisible(false);
          }}
        />
      )}
    </div>
  );
}
