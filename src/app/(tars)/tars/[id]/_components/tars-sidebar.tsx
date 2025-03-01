"use client";
import dynamic from "next/dynamic";
import TarsCreateDialog from "./tars-create-dialog";

const ThemeButton = dynamic(
  () => import("@/app/(inception)/_components/ThemeButton"),
  { ssr: false },
);

const TarsSidebar = () => {
  return (
    <aside className="md:w-60 md:border-r ">
      <div className="hidden md:flex items-center justify-between">
        <ThemeButton />
        <TarsCreateDialog />
      </div>
    </aside>
  );
};
export default TarsSidebar;
