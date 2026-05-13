import Image from "next/image";
import type { FestivalListItem } from "@/data/festival/types";

type Props = {
  item: FestivalListItem;
  categoryLabel: string;
};

export default function FestivalBoothDetailView({
  item,
  categoryLabel,
}: Props) {
  return (
    <div className="px-6 pb-24 flex flex-col gap-6">
      <div className="relative w-full overflow-hidden aspect-video">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          className="object-contain object-left"
          sizes="(max-width: 448px) 100vw, 400px"
          priority
        />
      </div>
      <div className="flex flex-col gap-9 ">
        <div>
          <h1 className="text-[20px] font-semibold leading-snug">
            {item.name}
          </h1>
          <p className="text-custom-darkgray text-[16px] pt-4">{item.time}</p>
          <p className="text-custom-darkgray text-[16px]">{item.location}</p>
          <p className="mt-4 text-[13px] leading-relaxed whitespace-pre-wrap text-custom-darkgray bg-custom-lightgray p-4 rounded-lg">
            {item.description}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-[20px] font-semibold">시설 정보</h2>
          <div className="bg-custom-lightgray w-full h-60"></div>
          <p className="text-[14px] text-[#252528]">
            상명대학교 천안캠퍼스 {item.boothNo}번 부스
          </p>
        </div>
      </div>
    </div>
  );
}
