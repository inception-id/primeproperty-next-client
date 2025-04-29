export enum Facility {
  WIFI = "wifi",
  School = "school",
  University = "university",
}

export type TFacility = {
  value: Facility;
  indonesian_label: string;
};

export const FACILITIES = [
  {
    value: Facility.WIFI,
    indonesian_label: Facility.WIFI,
  },
  {
    value: Facility.School,
    indonesian_label: "Sekolah",
  },
  {
    value: Facility.University,
    indonesian_label: "Universitas",
  },
];
