"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeButton = () => {
    const { resolvedTheme, setTheme } = useTheme();

    console.log(resolvedTheme)
    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => resolvedTheme === "dark"? setTheme("light") : setTheme("dark")}
        >
            {resolvedTheme === "light" && <MdDarkMode />}
            {resolvedTheme === "dark" && <MdLightMode />}
        </Button>
    );
};

export default ThemeButton;
