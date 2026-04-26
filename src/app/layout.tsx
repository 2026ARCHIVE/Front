import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import BottomNavBar from "@/components/navbar/BottomNavBar";

export const metadata: Metadata = {
  title: "SMU 26 대동제",
  description: "2026 대동제 축제 웹사이트입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-gray-100 antialiased">
        <div className="mx-auto flex min-h-screen max-w-md flex-col bg-white shadow-lg relative ">
          <Header />
          <main className="flex-1 overflow-y-auto pb-16">{children}</main>
          <BottomNavBar />
        </div>
      </body>
    </html>
  );
}
