export const formatToCurrencyUnit = (value: number): string => {
  const formatted = Intl.NumberFormat("id-ID", {
    notation: "compact",
    compactDisplay: "short",
    currency: "IDR",
    style: "currency",
    maximumFractionDigits: 1,
    // minimumFractionDigits: 1,
  }).format(value);

  return formatted.includes(",0") ? formatted.replace(",0", "") : formatted;
};
