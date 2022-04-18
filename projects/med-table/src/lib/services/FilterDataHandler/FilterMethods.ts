export class FilterMethods {
  static dateRangeHandler(value?: string, filter?: (Date | undefined)[]): boolean {
    const END_DATE = { HOURS: 23, MINUTES: 59 };
    const [startDate, endDate] = filter || [];

    if (!startDate) return true;

    if (!value) return false;

    const currentDate = new Date(value).getTime();

    if (endDate) {
      return startDate.getTime() <= currentDate && currentDate < endDate.setHours(END_DATE.HOURS, END_DATE.MINUTES);
    }

    return startDate.getTime() <= currentDate;
  }

  static selectHandler(value?: string, filter?: string[]): boolean {
    return !filter ? true : filter.includes(value || '');
  }

  static textHandler(value?: string, filter?: string): boolean {
    const regexp = new RegExp(`${filter?.trim()}`, 'i');
    return regexp.test(value || '');
  }
}
