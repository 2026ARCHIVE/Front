import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-white text-black w-full">
      <aside className="w-64 bg-gray-200">관리자 사이드바</aside>
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
