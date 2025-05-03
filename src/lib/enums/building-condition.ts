export enum BuildingCondition {
  New = "New",
  Good = "Good",
  Renovated = "Renovated",
  RenovationRequired = "RenovationRequired",
  Old = "Old",
}

export const buildingConditionToIndonesian = (condition: BuildingCondition) => {
  switch (condition) {
    case BuildingCondition.New:
      return "Baru";
    case BuildingCondition.Good:
      return "Bagus";
    case BuildingCondition.Renovated:
      return "Sudah Direnovasi";
    case BuildingCondition.RenovationRequired:
      return "Butuh Renovasi";
    case BuildingCondition.Old:
      return "Tua";
  }
};
