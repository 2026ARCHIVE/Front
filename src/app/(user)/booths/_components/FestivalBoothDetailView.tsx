import Image from "next/image";
import type { FestivalListItem } from "@/data/festival/types";

type Props = {
  item: FestivalListItem;
  categoryLabel: string;
};

export default function FestivalBoothDetailView({ item, categoryLabel }: Props) {
  return (
    <div className="px-6 pb-24 pt-2">
      <div className="relative mx-auto aspect-4/3 w-full max-w-sm overflow-hidden rounded-2xl bg-black/5">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 448px) 100vw, 400px"
          priority
        />
      </div>
      <p className="mt-3 text-[13px] font-medium text-custom-gray">
        {categoryLabel}
      </p>
      <h1 className="mt-1 text-[22px] font-bold leading-snug">{item.name}</h1>
      {item.boothNo != null ? (
        <p className="mt-2 text-[14px] text-custom-gray">
          부스 번호 {item.boothNo}
        </p>
      ) : null}
      <p className="mt-4 text-[15px] leading-relaxed whitespace-pre-wrap text-custom-gray/90">
        {item.description}
      </p>
    </div>
  );
}
