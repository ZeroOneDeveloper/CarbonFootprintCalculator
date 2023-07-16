import type { Metadata } from "next";

import "./globals.css";
import { Providers } from "./providers";
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
      <body
        style={{
          minHeight: "100vh",
          background:
            "conic-gradient(at center top, rgb(153, 246, 228), rgb(217, 249, 157))",
        }}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
