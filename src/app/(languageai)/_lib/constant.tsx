import { LuHouse, LuLanguages, LuUser } from "react-icons/lu";
import { FcAbout } from "react-icons/fc";

export const LANGUAGEAI_MENUS = [
  {
    title: "Home",
    href: "/languageai",
    icon: <LuHouse />,
  },
  {
    title: "Translate",
    href: "/languageai/translate",
    icon: <LuLanguages />,
  },
  {
    title: "Inception",
    href: "/",
    icon: <FcAbout />,
  },
  {
    title: "Account",
    href: "/account",
    icon: <LuUser />,
  },
];
