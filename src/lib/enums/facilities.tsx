import { LuChartColumn, LuSchool, LuWifi } from "react-icons/lu";

export enum Facility {
  WIFI = "wifi",
  School = "school",
  University = "university",
}

export type TFacility = {
  icon: JSX.Element;
  value: Facility;
  indonesian_label: string;
};

export const FACILITIES = [
  {
    icon: <LuWifi />,
    value: Facility.WIFI,
    indonesian_label: Facility.WIFI,
  },
  {
    icon: <LuSchool />,
    value: Facility.School,
    indonesian_label: "Sekolah",
  },
  {
    icon: <LuChartColumn />,
    value: Facility.University,
    indonesian_label: "Universitas",
  },
];
