import { LuHandshake, LuHouse, LuUser, LuUsers } from "react-icons/lu";

export const ADMIN_SIDEBAR_MENU = [
  {
    title: "Property",
    url: "/properties",
    icon: <LuHouse />,
  },
  {
    title: "Leads",
    url: "/leads",
    icon: <LuHandshake />,
  },
  {
    title: "Agents",
    url: "/agents",
    icon: <LuUsers />,
  },
  {
    title: "Account",
    url: "/account",
    icon: <LuUser />,
  },
];

export const AGENT_SIDEBAR_MENU = [
  {
    title: "Property",
    url: "/properties",
    icon: <LuHouse />,
  },
  {
    title: "Leads",
    url: "/leads",
    icon: <LuHandshake />,
  },
  {
    title: "Account",
    url: "/account",
    icon: <LuUser />,
  },
];
