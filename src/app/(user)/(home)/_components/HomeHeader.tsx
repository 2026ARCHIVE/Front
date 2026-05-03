import React from "react";
import Image from "next/image";
export default function HomeHeader() {
  return (
    <div className="p-7.5 pt-8">
      <Image
        src="/logo.svg"
        priority
        alt="DeerForY Logo"
        width={500}
        height={50}
      />
    </div>
  );
}
