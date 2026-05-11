"use client";
import React, { useEffect } from "react";
import GoodsItem from "./_components/GoodsItem";

export interface Goods {
  id: string;
  name: string;
  description: string;
  isSoldOut: boolean;
  imgUrl: string;
}

const dummyGoods: Goods[] = [
  {
    id: "1",
    name: "상품 1",
    description: "상품 1 설명",
    isSoldOut: false,
    imgUrl: "/Goods/goods1.png",
  },
  {
    id: "2",
    name: "상품 2",
    description: "상품 2 설명",
    isSoldOut: true,
    imgUrl: "/Goods/goods2.png",
  },
  {
    id: "3",
    name: "상품 3",
    description: "상품 3 설명",
    isSoldOut: false,
    imgUrl: "/Goods/goods3.png",
  },
];

export default function AdminGoodsPage() {
  const [goodsList, setGoodsList] = React.useState<Goods[]>([]);
  useEffect(() => {
    setTimeout(() => {
      setGoodsList(dummyGoods);
    }, 1000);
  }, []);
  return (
    <div className="flex flex-col p-4">
      {goodsList.map((goods) => (
        <GoodsItem key={goods.id} {...goods} />
      ))}
    </div>
  );
}
