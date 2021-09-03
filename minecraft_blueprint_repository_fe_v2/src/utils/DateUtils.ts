
export enum ConversionFactor {
    Seconds = 1000,
    Hours = Seconds * 3600,
    Days = Hours * 24,
    Weeks = Days * 7
}

export class DateUtils {

    /**
     * Calculates the number of days between the different dates that is provided as arguments.
     * @param dateFirst First date that will be used to count the days between.
     * @param dateSecond Second date that will be used to count the days between.
     * @returns number of days between the first and last day rounded to an integer.
     */
    public static calculateTimeBetweenDates(dateFirst: Date, dateSecond: Date, conversion?: ConversionFactor): number {
        return Math.floor((dateFirst.getTime() - dateSecond.getTime()) / (conversion ? conversion : ConversionFactor.Days));
    }

    /**
     * Calculates the number of days between a date and today.
     * @param date Date that will be used to count the days from now.
     * @returns the amount of days since the current date and the provided date rounded to an integer.
     */
    public static calculateDaysFromNow(date: Date): number {
        return DateUtils.calculateTimeBetweenDates(new Date(), date, ConversionFactor.Days);
    }
}