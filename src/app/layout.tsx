import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
