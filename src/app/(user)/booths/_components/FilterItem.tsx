import React from "react";

interface FilterItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function FilterItem({
  label,
  isActive,
  onClick,
}: FilterItemProps) {
  return (
    <div
      className={`px-4 py-2 shrink-0 whitespace-nowrap rounded-4xl cursor-pointer ${
        isActive
          ? "bg-custom-blue text-white font-semibold"
          : "bg-transparent text-custom-darkgray"
      }`}
      onClick={onClick}
    >
      {label}
    </div>
  );
}
