
export const getDatePlusOneYear = () => {
    const aYearFromNow = new Date();
    aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1);
    return new Intl.DateTimeFormat("id-ID",{ dateStyle: "medium"}).format(aYearFromNow);
}