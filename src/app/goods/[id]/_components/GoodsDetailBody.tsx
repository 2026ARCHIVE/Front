"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import GoodsDetailBoard from "./GoodsDetailBoard";

export interface GoodsDetail {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  isSoldOut: boolean;
  salesTime: string;
  place?: string;
}

const dummyData: GoodsDetail[] = [
  {
    id: 1,
    name: "유니폼",
    description:
      "상명대 대동제의 시그니처 색인 하늘색과 요즘 트렌드인 유님폼을 조합해서 제작한 유니폼.",
    price: 4500,
    imageUrl: "/goods/goods1_detail.png",
    isSoldOut: false,
    salesTime: "10:00 - 22:00",
    place: "디자인대학 4층",
  },
  {
    id: 2,
    name: "반다나",
    description:
      "상명대 대동제의 시그니처 색인 하늘색과 요즘 트렌드인 유님폼을 조합해서 제작한 반다나.",
    price: 1000,
    imageUrl: "/goods/goods2_detail.png",
    isSoldOut: true,
    salesTime: "10:00 - 22:00",
    place: "디자인대학 4층",
  },
  {
    id: 3,
    name: "타투 스티커",
    description:
      "상명대 대동제의 시그니처 색인 하늘색과 요즘 트렌드인 유님폼을 조합해서 제작한 타투 스티커.",
    price: 2000,
    imageUrl: "/goods/goods3_detail.png",
    isSoldOut: false,
    salesTime: "10:00 - 22:00",
    place: "디자인대학 4층",
  },
  {
    id: 4,
    name: "핀버튼",
    description:
      "상명대 대동제의 시그니처 색인 하늘색과 요즘 트렌드인 유님폼을 조합해서 제작한 핀버튼.",
    price: 3000,
    imageUrl: "/goods/goods4_detail.png",
    isSoldOut: true,
    salesTime: "10:00 - 22:00",
    place: "디자인대학 4층",
  },
];

export default function GoodsDetailBody({ goodsId }: { goodsId: string }) {
  const [goodsDetail, setGoodsDetail] = useState<GoodsDetail>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchGoodsDetail = async () => {
      if (!goodsId) return;
      setIsLoading(true);

      try {
        await new Promise((resolve) => setTimeout(resolve, 0));

        const detail = dummyData.find((item) => item.id === parseInt(goodsId));
        setGoodsDetail(detail);
      } catch (error) {
        console.error("데이터를 가져오는데 실패했습니다.", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGoodsDetail();
  }, [goodsId]);

  if (isLoading) return <div>로딩 중...</div>;
  if (!goodsDetail) return <div>상품을 찾을 수 없습니다.</div>;

  return (
    <div className="flex flex-col items-center gap-10">
      <Image
        src={goodsDetail.imageUrl}
        alt={goodsDetail.name}
        width={400}
        height={400}
        priority
        className="mt-4 w-auto h-auto"
      />
      <GoodsDetailBoard {...goodsDetail} />
    </div>
  );
}
