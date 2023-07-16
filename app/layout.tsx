import type { Metadata } from "next";
import Link from "next/link";

import { Sprout } from "lucide-react";

import "./globals.css";
import Header from "@/components/Header";

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
      <body className="min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-teal-200 to-lime-200">
        <Header />
        {children}
      </body>
    </html>
  );
}
