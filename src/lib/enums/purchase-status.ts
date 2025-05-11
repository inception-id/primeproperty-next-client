export enum PurchaseStatus {
  ForSale = "ForSale",
  ForRent = "ForRent",
  ForSaleOrRent = "ForSaleOrRent",
}

export const PURCHASE_STATUS = {
  [PurchaseStatus.ForSale]: "Dijual",
  [PurchaseStatus.ForRent]: "Disewa",
  [PurchaseStatus.ForSaleOrRent]: "Dijual & Disewa",
};
