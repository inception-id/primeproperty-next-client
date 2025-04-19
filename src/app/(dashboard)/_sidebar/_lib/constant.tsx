import { LuUsers } from "react-icons/lu";

export const ADMIN_SIDEBAR_MENU = [
  {
    title: "Agents",
    url: "/agents",
    icon: <LuUsers />,
    items: [
      {
        title: "Agent List",
        url: "/agents",
      },
      {
        title: "Add Agent",
        url: "/agents/creation",
      },
    ],
  },
];
