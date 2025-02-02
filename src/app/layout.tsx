import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inception.id | Process, visualize, and analyze your data",
  description:
    "Inception.id is data processing, visualization, and analytics company that delivers high-quality web application on demand based on your requested IDEAS and features. ",
  keywords:
    "data processing, data visualization, data analytics, AI, Language AI, web application, mobile application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
