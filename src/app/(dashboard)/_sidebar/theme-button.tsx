"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Tooltip } from "react-tooltip";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      data-tooltip-id="theme-button"
      data-tooltip-content={resolvedTheme}
      variant="ghost"
      size="icon"
      onClick={() =>
        resolvedTheme === "dark" ? setTheme("light") : setTheme("dark")
      }
    >
      {resolvedTheme === "dark" && <MdDarkMode />}
      {resolvedTheme === "light" && <MdLightMode />}
      <Tooltip id="theme-button" />
    </Button>
  );
};

export default ThemeButton;
