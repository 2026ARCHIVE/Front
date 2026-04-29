import React from "react";

interface SearchBarProps {
  onSearch: (keyword: string) => void;
}
export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div>
      <input
        type="text"
        placeholder="검색어를 입력하세요..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-4 py-2 bg-custom-lightgray rounded-xl mb-4"
      />
    </div>
  );
}
