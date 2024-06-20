import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConf } from "../../config/sites";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConf.name,
  description:siteConf.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-[#17181c] flex flex-col min-h-screen"
}>{children}</body>
    </html>
  );
}
