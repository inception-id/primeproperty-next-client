export const formatToCurrencyUnit = (value: number): string => {
  return Intl.NumberFormat("id-ID", {
    notation: "compact",
    compactDisplay: "short",
    currency: "IDR",
    style: "currency",
  }).format(value);
};
