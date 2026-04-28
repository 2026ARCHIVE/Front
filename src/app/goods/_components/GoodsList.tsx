import React from "react";
import GoodsListItem from "./GoodsListItem";

export interface Goods {
  id: number;
  imgUrl: string;
  name: string;
  place: string;
  isSoldOut: boolean;
}

const dummyGoods: Goods[] = [
  {
    id: 1,
    imgUrl: "/Goods/goods1.png",
    name: "유니폼",
    place: "판매처 1",
    isSoldOut: false,
  },
  {
    id: 2,
    imgUrl: "/Goods/goods2.png",
    name: "반다나",
    place: "판매처 2",
    isSoldOut: true,
  },
  {
    id: 3,
    imgUrl: "/Goods/goods3.png",
    name: "타투 스티커",
    place: "판매처 3",
    isSoldOut: false,
  },
  {
    id: 4,
    imgUrl: "/Goods/goods4.png",
    name: "핀버튼",
    place: "판매처 4",
    isSoldOut: true,
  },
];
export default function GoodsList() {
  return (
    <div className=" flex flex-col gap-6 p-8.5">
      {dummyGoods.map((goods) => (
        <GoodsListItem
          key={goods.id}
          id={goods.id}
          imgUrl={goods.imgUrl}
          name={goods.name}
          place={goods.place}
          isSoldOut={goods.isSoldOut}
        />
      ))}
    </div>
  );
}
