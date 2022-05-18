import { getDaysInMonth, format } from "date-fns";

const getMonthDays = (date: Date) => {
  let datesInMonth = getDaysInMonth(date);
  let dates = [];
  for (let index = 1; index <= datesInMonth; index++) {
    dates.push({
      date: formatToSimpleDate(
        new Date(date.getFullYear(), date.getMonth(), index),
      ),
    });
  }
  return dates;
};

const formatToSimpleDate = (date: Date) => {
  return format(date, "MM/dd/yyyy");
};

export { getMonthDays, formatToSimpleDate };
