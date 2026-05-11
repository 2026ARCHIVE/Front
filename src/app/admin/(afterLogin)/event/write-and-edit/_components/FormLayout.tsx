"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface FormLayoutProps {
  // 편집용
  eventId?: string;
  title?: string;
  date?: string;
  location?: string;
  description?: string;
  method?: string;
  prizeText?: string;
  prizeImageUrl?: string;
  mainImageUrl?: string;
}

export default function FormLayout({
  eventId,
  title,
  date,
  location,
  description,
  method,
  prizeText,
  prizeImageUrl,
  mainImageUrl,
}: FormLayoutProps) {
  const [mainImgPreview, setMainImgPreview] = React.useState<string | null>(
    mainImageUrl || null,
  );
  const [prizeImgPreview, setPrizeImgPreview] = React.useState<string | null>(
    prizeImageUrl || null,
  );
  const [prizeCategory, setPrizeCategory] = React.useState<string>(
    prizeText ? "category1" : prizeImageUrl ? "category2" : "",
  );
  const router = useRouter();

  const handleMainImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setMainImgPreview(previewUrl);
    }
  };
  const handlePrizeImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPrizeImgPreview(previewUrl);
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const submitData = {
      title: formData.get("title"),
      date: formData.get("date"),
      location: formData.get("location"),
      description: formData.get("description"),
      method: formData.get("method"),
      prizeText: formData.get("prizeText"),
      mainImage: formData.get("mainImage"),
      prizeImage: formData.get("prizeImage"),
    };
    console.log("전송할 FormData 객체:", formData);

    if (eventId) {
      alert(`이벤트 수정: ${JSON.stringify({ eventId, ...submitData })}`);
    } else {
      alert(`이벤트 생성: ${JSON.stringify(submitData)}`);
    }
  };

  return (
    <form className="flex gap-4 flex-col" onSubmit={submitHandler}>
      <input
        name="title"
        type="text"
        placeholder="제목을 입력하세요"
        className="bg-custom-lightgray p-2 rounded-lg"
        defaultValue={title || ""}
      />
      <section>
        <label
          htmlFor="image-upload"
          className="flex items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
        >
          {mainImgPreview ? (
            <Image
              src={mainImgPreview}
              alt="Preview"
              width={200}
              height={200}
              priority
              className="object-contain w-full h-full p-2 z-50"
            />
          ) : (
            <span className="text-gray-500 z-10">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_169_16534"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_169_16534)">
                  <path
                    d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM19 7.25L12.95 14.05L9 10.1L5 14.1V16.95L9 12.95L13.05 17L19 10.25V7.25Z"
                    fill="#1C1B1F"
                  />
                </g>
              </svg>
            </span>
          )}
        </label>

        <input
          id="image-upload"
          name="mainImage"
          type="file"
          accept="image/*"
          onChange={handleMainImageChange}
          className="hidden"
        />
      </section>
      <div className="flex gap-4 flex-col  bg-custom-lightgray p-4 rounded-lg">
        <section className="flex flex-row gap-4">
          <p>일시</p>
          <input
            name="date"
            type="text"
            placeholder="일시를 입력하세요"
            defaultValue={date || ""}
          />
        </section>
        <section className="flex flex-row gap-4">
          <p>장소</p>
          <input
            name="location"
            type="text"
            placeholder="장소를 입력하세요"
            defaultValue={location || ""}
          />
        </section>
        <section className="flex flex-row gap-4">
          <p>설명</p>
          <textarea
            name="description"
            placeholder="설명을 입력하세요"
            defaultValue={description || ""}
          />
        </section>
      </div>

      <textarea
        name="method"
        placeholder="진행 방법을 입력하세요"
        className="w-full p-2 border border-gray-300 rounded-md min-h-60 bg-custom-lightgray"
        defaultValue={method || ""}
      />
      <div>
        <select
          className="p-2 rounded-md bg-custom-lightgray"
          value={prizeCategory}
          onChange={(e) => setPrizeCategory(e.target.value)}
        >
          <option value="">상품 입력 카테고리 선택</option>
          <option value="category1">텍스트</option>
          <option value="category2">이미지</option>
        </select>
        {prizeCategory === "category1" && (
          <textarea
            name="prizeText"
            placeholder="상품을 입력하세요"
            className="w-full p-2 mt-2 border border-gray-300 rounded-md bg-custom-lightgray min-h-40"
            defaultValue={prizeText || ""}
          />
        )}
        {prizeCategory === "category2" && (
          <section className="mt-2">
            <label
              htmlFor="prize-image-upload"
              className="flex items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              {prizeImgPreview ? (
                <Image
                  src={prizeImgPreview}
                  alt="Prize Preview"
                  width={200}
                  height={200}
                  className="object-contain w-full h-full p-2"
                />
              ) : (
                <span className="text-gray-500 text-sm">
                  여기를 클릭하여 상품 이미지 삽입
                </span>
              )}
            </label>

            <input
              id="prize-image-upload"
              name="prizeImage"
              type="file"
              accept="image/*"
              onChange={handlePrizeImageChange}
              className="hidden"
            />
          </section>
        )}
      </div>
      <div className=" justify-end flex gap-4">
        <button
          type="button"
          className="font-semibold bg-custom-lightgray rounded-md px-2.5 py-1.5"
          onClick={() => router.back()}
        >
          취소
        </button>
        <button
          type="submit"
          className="font-semibold bg-blue-500 text-white rounded-md px-2.5 py-1.5"
        >
          저장
        </button>
      </div>
    </form>
  );
}
