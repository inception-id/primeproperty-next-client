import { LuCirclePlus, LuUsers } from "react-icons/lu";

export const ADMIN_SIDEBAR_MENU = [
  {
    title: "Agents",
    url: "/agents",
    icon: <LuUsers />,
    items: [
      {
        title: "Agent List",
        url: "/agents",
        icon: <LuUsers />,
      },
      {
        title: "New Agent",
        url: "/agents/new",
        icon: <LuCirclePlus />,
      },
    ],
  },
];
