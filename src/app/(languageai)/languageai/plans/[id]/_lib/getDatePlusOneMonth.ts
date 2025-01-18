export const getDatePlusOneMonth = () => {
  const oneMonthFromNow = new Date();
  oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1);
  return new Intl.DateTimeFormat("id-ID", { dateStyle: "medium" }).format(
    oneMonthFromNow,
  );
};
