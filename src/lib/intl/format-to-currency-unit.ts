export enum CurrencyUnit {
  IDR = "Idr",
  USD = "Usd",
}

export const formatToCurrencyUnit = (
  value: number,
  currency?: string,
): string => {
  const formatted = Intl.NumberFormat("id-ID", {
    notation: "compact",
    compactDisplay: "short",
    currency: currency
      ? currency.toUpperCase()
      : CurrencyUnit.IDR.toUpperCase(),
    style: "currency",
    maximumFractionDigits: 1,
  }).format(value);

  return formatted.includes(",0") ? formatted.replace(",0", "") : formatted;
};
