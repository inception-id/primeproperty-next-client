export enum BuildingCondition {
  New = "New",
  Good = "Good",
  Renovated = "Renovated",
  RenovationRequired = "RenovationRequired",
  Old = "Old",
}

export const BUILDING_CONDITIONS = [
  {
    value: BuildingCondition.New,
    indonesian_label: "Baru",
    english_label: "New",
  },
  {
    value: BuildingCondition.Good,
    indonesian_label: "Bagus",
    english_label: "Good",
  },
  {
    value: BuildingCondition.Renovated,
    indonesian_label: "Sudah Direnovasi",
    english_label: "Renovated",
  },
  {
    value: BuildingCondition.RenovationRequired,
    indonesian_label: "Butuh Renovasi",
    english_label: "Renovation Required",
  },
  {
    value: BuildingCondition.Old,
    indonesian_label: "Tua",
    english_label: "Old",
  },
];
