export enum PurchaseStatus {
  ForSale = "ForSale",
  ForRent = "ForRent",
  ForSaleOrRent = "ForSaleOrRent",
}

export const PURCHASE_STATUS = [
  {
    value: PurchaseStatus.ForSale,
    indonesian_label: "dijual",
    english_label: "For Sale",
  },
  {
    value: PurchaseStatus.ForRent,
    indonesian_label: "disewa",
    english_label: "For Rent",
  },
  {
    value: PurchaseStatus.ForSaleOrRent,
    indonesian_label: "dijual atau disewa",
    english_label: "For Sale or Rent",
  },
];
