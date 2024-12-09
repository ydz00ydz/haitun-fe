import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TongJiScript from "@/component/BaiduTongJi";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "海豚电商工具-批量导出订单，拼多多解密导单工具",
  description: "海豚拼多多导单工具，拼多多订单批量解密导单工具，解放双手，提高效率",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TongJiScript />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
