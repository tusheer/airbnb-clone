type DateRangeType = [Date, Date];

export function getPreviousDate() {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // set hours, mins, secs, and ms to 0
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
    currentDate.setTime(currentDate.getTime() - oneDay + 60 * 1000); // subtract 1 day and add 1 minute
    return currentDate; // format the output as a string
}

export function getTodayDate() {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // set hours, mins, secs, and ms to 0
    const oneMinute = 60 * 1000; // milliseconds in a minute
    currentDate.setTime(currentDate.getTime() + oneMinute); // add 1 minute to reach 12:01am
    return currentDate; // format the output as a string
}

export function getLastCustomDaysDateRange(day: number) {
    const currentDate = new Date();
    const firstDayOfLastDays = new Date(currentDate.getTime() - (day - 1) * 24 * 60 * 60 * 1000);
    firstDayOfLastDays.setHours(0, 0, 0, 0);

    const lastDay = new Date(currentDate.getTime() - 1);
    lastDay.setHours(23, 59, 59, 999);

    return [firstDayOfLastDays, lastDay] as DateRangeType;
}

export function areDatesEqual(date1: Date | null, date2: Date | null) {
    if (!date1 || !date2) {
        return false;
    }

    return (
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
    );
}

export function getNextMonth(date: Date) {
    const currentDate = new Date(date);
    const currentMonth = currentDate.getMonth();
    let nextMonth = currentMonth + 1;
    let year = currentDate.getFullYear();
    if (nextMonth > 11) {
        nextMonth = 0;
        year++;
    }
    const nextMonthDate = new Date(year, nextMonth, 1);
    return nextMonthDate;
}

export function getCurrentMonthDateRange() {
    const currentDate = new Date();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    // const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    return [firstDayOfMonth, new Date()] as DateRangeType;
}

export function getPreviousMonthDateRange() {
    const currentDate = new Date();
    const prevMonthYear = currentDate.getMonth() === 0 ? currentDate.getFullYear() - 1 : currentDate.getFullYear();
    const prevMonth = currentDate.getMonth() === 0 ? 11 : currentDate.getMonth() - 1;
    const lastDayOfPrevMonth = new Date(prevMonthYear, prevMonth + 1, 0);
    const firstDayOfPrevMonth = new Date(prevMonthYear, prevMonth, 1);

    return [firstDayOfPrevMonth, lastDayOfPrevMonth] as DateRangeType;
}
export function getPreviousYearDateRange() {
    const currentYear = new Date().getFullYear();
    const previousYear = currentYear - 1;
    const firstDayOfYear = new Date(previousYear, 0, 1);
    const lastDayOfYear = new Date(previousYear, 11, 31);

    return [firstDayOfYear, lastDayOfYear] as DateRangeType;
}

export function getThisYearDateRange() {
    const currentYear = new Date().getFullYear();
    const firstDayOfYear = new Date(currentYear, 0, 1);
    const lastDayOfYear = new Date(currentYear, 11, 31);
    return [firstDayOfYear, lastDayOfYear] as DateRangeType;
}
