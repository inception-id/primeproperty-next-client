"use client";
import dynamic from "next/dynamic";
import TarsCreateDialog from "../_components/tars-create-dialog";

const ThemeButton = dynamic(
  () => import("@/app/(inception)/_components/ThemeButton"),
  { ssr: false },
);

const TarsSidebarHead = () => {
  return (
    <div className="hidden md:flex items-center justify-between">
      <ThemeButton />
      <TarsCreateDialog />
    </div>
  );
};

export default TarsSidebarHead;
