export enum PurchaseStatus {
  ForSale = "ForSale",
  ForRent = "ForRent",
}

export const PURCHASE_STATUS = {
  [PurchaseStatus.ForSale]: "Dijual",
  [PurchaseStatus.ForRent]: "Disewa",
};

export const pathParamsToPurchaseStatus = (pathParams?: string) => {
  switch (pathParams) {
    case "dijual":
      return PurchaseStatus.ForSale;
    case "disewa":
      return PurchaseStatus.ForRent;
    default:
      return "";
  }
};
