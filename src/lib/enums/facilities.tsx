import { LuWifi, LuSchool, LuPenLine } from "react-icons/lu";
export enum Facility {
  WIFI = "wifi",
  School = "school",
  University = "university",
}

export type TFacility = {
  value: Facility;
  indonesian_label: string;
};

export const FACILITY_ICON = {
  [Facility.WIFI]: <LuWifi />,
  [Facility.School]: <LuSchool />,
  [Facility.University]: <LuPenLine />,
};
