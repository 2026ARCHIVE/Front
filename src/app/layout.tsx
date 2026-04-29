import "./globals.css";
import type { Metadata } from "next";

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
      <body className="bg-gray-100 antialiased">{children}</body>
    </html>
  );
}
