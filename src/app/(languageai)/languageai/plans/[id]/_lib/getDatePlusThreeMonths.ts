
export const getDatePlusThreeMonths = () => {
    const threeMonthFromNow= new Date();
    threeMonthFromNow.setMonth(threeMonthFromNow.getMonth() + 3);
    return new Intl.DateTimeFormat("id-ID",{ dateStyle: "medium"}).format(threeMonthFromNow);
}