import React from "react";
import Image from "next/image";
export default function MainBanner() {
  return (
    <div>
      <Image
        src="/Home/banner.png"
        priority
        alt="Main Banner"
        width={1200}
        height={400}
      />
    </div>
  );
}
