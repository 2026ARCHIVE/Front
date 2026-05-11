"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface FormLayoutProps {
  lostId?: number; 
  itemName?: string;
  category?: string; 
  description?: string;
  imageUrls?: string[]; 
  foundLocation?: string;
  foundTime?: string;
  storageLocation?: string; 
  status?: string; 
}

// 화면에 렌더링할 한글명과 서버로 전송할 영문명(Enum) 매핑
const CATEGORIES: { key: string; label: string }[] = [
  { key: "WALLET", label: "지갑" },
  { key: "ELECTRONICS", label: "전자기기" },
  { key: "ACCESSORY", label: "액세서리" },
  { key: "BAG", label: "가방" },
  { key: "ETC", label: "기타" },
];

const STATUSES: { key: string; label: string; color: string; text: string }[] =
  [
    {
      key: "STORED",
      label: "보관중",
      color: "bg-blue-500",
      text: "text-white",
    },
    {
      key: "RETRIEVED",
      label: "회수완료",
      color: "bg-gray-700",
      text: "text-white",
    },
  ];

export default function FormLayout({
  lostId,
  itemName,
  category,
  description,
  imageUrls,
  foundLocation,
  foundTime,
  storageLocation,
  status,
}: FormLayoutProps) {
  const router = useRouter();

  const initialImg = imageUrls && imageUrls.length > 0 ? imageUrls[0] : null;
  const [imgPreview, setImgPreview] = useState<string | null>(initialImg);

  const [selectedCategory, setSelectedCategory] = useState<string>(
    category || "",
  );
  const [selectedStatus, setSelectedStatus] = useState<string>(
    status || "STORED",
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImgPreview(previewUrl);
    }
  };

  // 등록 및 수정 핸들러
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const itemName = formData.get("itemName") as string;
    const description = formData.get("description") as string;
    const foundLocation = formData.get("foundLocation") as string;
    const foundTime = formData.get("foundTime") as string;
    const storageLocation = formData.get("storageLocation") as string;
    const image = formData.get("image") as File;

    if (
      !itemName.trim() ||
      !foundLocation.trim() ||
      !foundTime.trim() ||
      !storageLocation.trim() ||
      !description.trim()
    ) {
      alert("모든 텍스트 항목을 입력해주세요.");
      return;
    }

    if (!selectedCategory) {
      alert("카테고리를 선택해주세요.");
      return;
    }

    if (!imgPreview && (!image || image.size === 0)) {
      alert("사진을 첨부해주세요.");
      return;
    }

    const submitData = {
      itemName,
      category: selectedCategory,
      description,
      foundLocation,
      foundTime,
      storageLocation,
      status: selectedStatus,
      image,
    };

    console.log("전송할 데이터:", submitData);

    if (lostId) {
      alert(
        `분실물 수정: ${JSON.stringify({ id: lostId, ...submitData }, null, 2)}`,
      );
      router.replace(`/admin/lost/`);
    } else {
      alert(`분실물 등록: ${JSON.stringify(submitData, null, 2)}`);
      router.replace(`/admin/lost/`);
    }
  };

  return (
    <form
      className="flex flex-col bg-white min-h-screen"
      onSubmit={submitHandler}
    >
      <div className="px-4 mt-6 mb-4">
        <input
          name="itemName"
          type="text"
          placeholder="분실물 이름을 입력해주세요"
          className="w-full bg-[#f4f4f4] p-3 text-base text-gray-800 focus:outline-none"
          defaultValue={itemName || ""}
        />
      </div>

      <div className="bg-[#f4f4f4] px-4 py-6 flex flex-col gap-6">
        {/* 사진 */}
        <div className="flex">
          <span className="w-24 text-[#a3a3a3] font-medium pt-1">사진</span>
          <div className="flex-1">
            <label
              htmlFor="image-upload"
              className="cursor-pointer text-gray-800 text-base"
            >
              {imgPreview ? (
                <div className="relative w-20 h-20 bg-gray-200">
                  <Image
                    src={imgPreview}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                "사진 첨부"
              )}
            </label>
            <input
              id="image-upload"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>

        {/* 습득 장소 */}
        <div className="flex items-center">
          <span className="w-24 text-[#a3a3a3] font-medium">습득 장소</span>
          <input
            name="foundLocation"
            type="text"
            placeholder="장소를 입력해주세요"
            className="flex-1 bg-transparent text-gray-800 focus:outline-none placeholder:text-[#a3a3a3]"
            defaultValue={foundLocation || ""}
          />
        </div>

        {/* 습득 시간 */}
        <div className="flex items-center">
          <span className="w-24 text-[#a3a3a3] font-medium">습득 시간</span>
          <input
            name="foundTime"
            type="text"
            placeholder="시간(예: 2026-05-15 14:30경)"
            className="flex-1 bg-transparent text-gray-800 focus:outline-none placeholder:text-[#a3a3a3]"
            defaultValue={foundTime || ""}
          />
        </div>

        {/* 보관 장소 (추가됨) */}
        <div className="flex items-center">
          <span className="w-24 text-[#a3a3a3] font-medium">보관 장소</span>
          <input
            name="storageLocation"
            type="text"
            placeholder="보관 장소를 입력해주세요"
            className="flex-1 bg-transparent text-gray-800 focus:outline-none placeholder:text-[#a3a3a3]"
            defaultValue={storageLocation || ""}
          />
        </div>

        {/* 카테고리 */}
        <div className="flex">
          <span className="w-24 text-[#a3a3a3] font-medium pt-1">카테고리</span>
          <div className="flex-1 bg-[#d9d9d9] p-3 rounded relative">
            <div className="absolute top-3 right-3 text-black">▼</div>
            <div className="flex flex-col items-start gap-2 max-w-fit relative z-10">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors ${
                    selectedCategory === cat.key
                      ? "bg-custom-blue text-white border-2 border-gray-400"
                      : "bg-white text-gray-500"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 상태 */}
        <div className="flex">
          <span className="w-24 text-[#a3a3a3] font-medium pt-1">상태</span>
          <div className="flex-1 bg-[#d9d9d9] p-3 rounded relative">
            <div className="absolute top-3 right-3 text-black">▼</div>
            <div className="flex flex-col items-start gap-2 max-w-fit relative z-10">
              {STATUSES.map((stat) => (
                <button
                  key={stat.key}
                  type="button"
                  onClick={() => setSelectedStatus(stat.key)}
                  className={`px-3 py-1 rounded-sm text-sm font-bold ${
                    selectedStatus === stat.key
                      ? `${stat.color} ${stat.text}`
                      : "bg-gray-400 text-gray-100 opacity-60"
                  }`}
                >
                  {stat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <textarea
          name="description"
          placeholder="내용을 입력하세요"
          className="w-full h-32 resize-none bg-transparent text-gray-800 focus:outline-none placeholder:text-[#a3a3a3]"
          defaultValue={description || ""}
        />

        <div className="flex justify-end gap-3 mt-auto pb-10 pt-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-2.5 bg-[#f1f1f1] text-[#1c1b1f] font-semibold rounded-lg"
          >
            취소
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 bg-custom-blue text-white font-semibold rounded-lg"
          >
            저장
          </button>
        </div>
      </div>
    </form>
  );
}
