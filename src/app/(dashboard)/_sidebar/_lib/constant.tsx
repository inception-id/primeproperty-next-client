import {
  LuHouse,
  LuHousePlug,
  LuHousePlus,
  LuUserPlus,
  LuUsers,
  LuWarehouse,
} from "react-icons/lu";

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
        icon: <LuUserPlus />,
      },
    ],
  },
  {
    title: "Properties",
    url: "/properties",
    icon: <LuHouse />,
    items: [
      {
        title: "Property List",
        url: "/properties",
        icon: <LuHouse />,
      },
      {
        title: "Property Type",
        url: "/properties/types",
        icon: <LuHousePlug />,
      },
      {
        title: "Property Certs",
        url: "/properties/certs",
        icon: <LuWarehouse />,
      },
      {
        title: "Add Property",
        url: "/properties/new",
        icon: <LuHousePlus />,
      },
    ],
  },
];
