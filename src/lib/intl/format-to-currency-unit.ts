export const formatToCurrencyUnit = (value: number): string => {
  return Intl.NumberFormat("id-ID", {
    notation: "compact",
    compactDisplay: "short",
    currency: "IDR",
    style: "currency",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);
};
