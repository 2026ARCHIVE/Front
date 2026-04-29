"use client";
import React from "react";
import { BoothData } from "../_data/boothData";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BoothItemProps {
  booth: BoothData;
}

export default function BoothItem({ booth }: BoothItemProps) {
  const router = useRouter();

  return (
    <div
      className="cursor-pointer hover:shadow-lg rounded-xl"
      onClick={() => router.push(`/booths/${booth.id}`)}
    >
      <Image
        src={booth.imageUrl}
        alt={booth.name}
        width={400}
        height={300}
        className="rounded-lg object-cover"
        priority
      />
      <div className="p-4">
        <p className="text-xl font-bold">{booth.name}</p>
        <p className="mb-4 text-custom-darkgray">{booth.time}</p>
        <p className="text-custom-darkgray">{booth.location}</p>
      </div>
    </div>
  );
}
