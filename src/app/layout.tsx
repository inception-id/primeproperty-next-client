import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Providers from "@/components/providers";
import "./globals.css";

const inter = Inter({style: "normal", subsets: ["latin"]});

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
        <body className={inter.className}>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    );
}
