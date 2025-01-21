export enum ESubscriptionPeriod {
  OneYear = "OneYear",
  ThreeMonths = "ThreeMonths",
  OneMonth = "OneMonth",
}

export const convertSubscriptionPeriodToMonth = (
  period: ESubscriptionPeriod,
) => {
  switch (period) {
    case ESubscriptionPeriod.OneYear:
      return 12;
    case ESubscriptionPeriod.ThreeMonths:
      return 3;
    case ESubscriptionPeriod.OneMonth:
      return 1;
  }
};
