import {
  LuAudioLines,
  LuClock,
  LuDatabase,
  LuFileQuestion,
  LuHouse,
  LuLanguages,
  LuMail,
  LuSquareTerminal,
  LuUser,
} from "react-icons/lu";
import { GiSpinningTop } from "react-icons/gi";
import { CgTranscript } from "react-icons/cg";

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
    title: "Text to Speech",
    href: "/languageai/text-to-speech",
    icon: <LuAudioLines />,
  },
  {
    title: "Speech to Text",
    href: "/languageai/speech-to-text",
    icon: <CgTranscript />,
  },
  {
    title: "Storage",
    href: "/languageai/storage",
    icon: <LuDatabase />,
    refresh: true,
  },
  {
    title: "History",
    href: "/languageai/history",
    icon: <LuClock />,
    refresh: true,
  },
  {
    title: "Support",
    href: "/languageai/support",
    icon: <LuFileQuestion />,
  },
  {
    title: "Request",
    href: "/languageai/request",
    icon: <LuMail />,
  },
  {
    title: "Inception",
    href: "/",
    icon: <GiSpinningTop className="-rotate-45" />,
  },
  {
    title: "Account",
    href: "/account",
    icon: <LuUser />,
  },
];
