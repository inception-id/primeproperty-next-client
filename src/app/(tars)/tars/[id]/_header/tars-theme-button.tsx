"use client";
import dynamic from "next/dynamic";

const ThemeButton = dynamic(
  () => import("@/app/(inception)/_components/ThemeButton"),
  { ssr: false },
);

const TarsThemeButton = () => {
  return <ThemeButton />;
};

export default TarsThemeButton;
