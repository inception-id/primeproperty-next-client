import { LuHouse, LuLanguages, LuSquareTerminal, LuUser } from "react-icons/lu";
import { GiSpinningTop } from "react-icons/gi";

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
    title: "Checkbot",
    href: "/languageai/checkbot",
    icon: <LuSquareTerminal />,
  },
  {
    title: "Inception",
    href: "/",
    icon: <GiSpinningTop />,
  },
  {
    title: "Account",
    href: "/account",
    icon: <LuUser />,
  },
];
