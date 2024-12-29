import {
  LuAudioLines,
  LuHouse,
  LuLanguages,
  LuSquareTerminal,
  LuUser,
} from "react-icons/lu";
import { GiSpinningTop } from "react-icons/gi";
import {CgTranscript} from "react-icons/cg";

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
