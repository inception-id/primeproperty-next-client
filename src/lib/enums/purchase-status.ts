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

export const pathParamsToPurchaseStatus = (pathParams?: string) => {
  switch (pathParams) {
    case "dijual-dan-disewa":
      return PurchaseStatus.ForSaleOrRent;
    case "dijual":
      return PurchaseStatus.ForSale;
    case "disewa":
      return PurchaseStatus.ForRent;
    default:
      return "";
  }
};
