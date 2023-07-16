import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "탄소발자국 계산기",
  description:
    "Carbon Footprint Calculator project to be submitted to school's software festival contest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
