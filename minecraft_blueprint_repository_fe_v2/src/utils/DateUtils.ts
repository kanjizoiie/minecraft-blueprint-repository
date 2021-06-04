export class DateUtils {

    /**
     * Calculates the number of days between the different dates that is provided as arguments.
     * @param dateFirst First date that will be used to count the days between.
     * @param dateSecond Second date that will be used to count the days between.
     * @returns number of days between the first and last day rounded to an integer.
     */
    public static calculateDaysBetweenDates(dateFirst: Date, dateSecond: Date): number {
        if (dateFirst.getTime() > dateSecond.getTime()) {
            return Math.round((dateFirst.getTime() - dateSecond.getTime()) / (1000 * 3600 * 24));
        } else  {
            throw new Error("The first date is not later than the second date, this would provide a negative amount of days.");
        }
    }

    /**
     * Calculates the number of days between a date and today.
     * @param date Date that will be used to count the days from now.
     * @returns the amount of days since the current date and the provided date rounded to an integer.
     */
    public static calculateDaysFromNow(date: Date): number {
        return DateUtils.calculateDaysBetweenDates(new Date(), date);
    }
}