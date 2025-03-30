export const formatToPerShare = (value: number, listedShares: number) => {
  const amount = value / listedShares;

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};
