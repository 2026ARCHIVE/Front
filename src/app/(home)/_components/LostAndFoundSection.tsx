import React from "react";
import SectionLayout from "./SectionLayout";

export default function LostAndFoundSection() {
  return (
    <SectionLayout title="분실물 안내" link="/lost-and-found">
      <div className="w-30 h-40 shrink-0 bg-[#E0E0E0] rounded-lg"></div>
      <div className="w-30 h-40 shrink-0 bg-[#E0E0E0] rounded-lg"></div>
      <div className="w-30 h-40 shrink-0 bg-[#E0E0E0] rounded-lg"></div>
      <div className="w-30 h-40 shrink-0 bg-[#E0E0E0] rounded-lg"></div>
    </SectionLayout>
  );
}
