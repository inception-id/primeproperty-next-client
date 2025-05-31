export enum RentTimeUnit {
  Monthly = "Monthly",
  Yearly = "Yearly",
}

export const RENT_TIME = {
  [RentTimeUnit.Monthly]: "per bulan",
  [RentTimeUnit.Yearly]: "per tahun",
};
