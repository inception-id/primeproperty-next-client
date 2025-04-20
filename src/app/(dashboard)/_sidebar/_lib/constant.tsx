import { LuUsers } from "react-icons/lu";

export const ADMIN_SIDEBAR_MENU = [
  {
    title: "Agents",
    url: "/agents",
    icon: <LuUsers />,
    items: [
      {
        title: "Agent List",
        subtitle: "See agent list",
        url: "/agents",
      },
      {
        title: "Add Agent",
        subtitle: "Add new agent",
        url: "/agents/creation",
      },
    ],
  },
];
