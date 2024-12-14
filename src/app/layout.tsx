import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {ThemeProvider} from "next-themes";

const inter = Inter({ style: "normal", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inception.id",
  description: "Data processing, visualization, and analytics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "antialiased")}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
