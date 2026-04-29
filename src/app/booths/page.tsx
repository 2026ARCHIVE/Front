"use client";
import React, { useEffect } from "react";
import SearchBar from "./_components/SearchBar";
import Filter from "./_components/Filter";
import BoothList from "./_components/BoothList";
import { BoothData, dummyBooths } from "./_data/boothData";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BoothsPage() {
  const [searchKeyword, setSearchKeyword] = React.useState("");
  const [activeFilter, setActiveFilter] = React.useState("전체");
  const [booths, setBooths] = React.useState<BoothData[]>([]);
  const router = useRouter();

  useEffect(() => {
    const timeset = setTimeout(() => {
      setBooths(dummyBooths);
    }, 1000);
    return () => clearTimeout(timeset);
  }, []);

  const filteredBooths = React.useMemo(() => {
    return booths.filter((booth) => {
      const matchesKeyword =
        booth.name.includes(searchKeyword) ||
        booth.host.includes(searchKeyword);
      const matchesFilter =
        activeFilter === "전체" || booth.category === activeFilter;
      return matchesKeyword && matchesFilter;
    });
  }, [searchKeyword, activeFilter, booths]);

  useEffect(() => {
    if (searchKeyword.trim() === "관리자") {
      router.push("/admin/login");
    }
  }, [searchKeyword, router]);

  return (
    <div className="px-8 overflow-y-auto flex-1 h-full pb-24">
      <SearchBar onSearch={setSearchKeyword} />
      <Filter onFilterChange={setActiveFilter} activeFilter={activeFilter} />
      {booths.length === 0 ? (
        <div className="flex items-center justify-center h-full mt-10">
          <Loader2 className="h-8 w-8 animate-spin text-custom-blue" />
        </div>
      ) : (
        <BoothList booths={filteredBooths} />
      )}
    </div>
  );
}
