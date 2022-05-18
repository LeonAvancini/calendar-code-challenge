import { useQuery } from "react-query";
import "./Home.scss";
import { useEffect, useState } from "react";
import { formatToSimpleDate, getMonthDays } from "../../../Utils/Dates";
import Day from "../../Day";

export interface Reminder {
  id: number;
  description: string;
  date: string;
  state: number;
}

export interface DateWithReminders {
  date: string;
  reminders: Reminder[];
}

const Home = () => {
  const [monthWithReminders, setMonthWithReminders] = useState<
    DateWithReminders[]
  >([]);
  const [showDaysWithoutReminders, setShowDaysWithoutReminders] =
    useState<boolean>(false);
  const { isLoading, data } = useQuery("repoData", () =>
    fetch("http://localhost:3000/posts").then((res) => res.json()),
  );

  useEffect(() => {
    if (data) {
      let reminders: Reminder[] = data;
      let monthDays = getMonthDays(new Date());

      const matchCalendarAndReminders = () => {
        let result = monthDays.map((actualDate) => {
          let remindersWithActualDate = reminders.filter((reminder) => {
            let dayFormatted = formatToSimpleDate(new Date(reminder.date));
            return actualDate.date === dayFormatted;
          });

          return {
            date: actualDate.date,
            reminders: [...remindersWithActualDate],
          };
        });

        return result;
      };
      let getMonthCalendarWithReminders = matchCalendarAndReminders();
      setMonthWithReminders(getMonthCalendarWithReminders);
    }
  }, [data]);

  if (isLoading) return <>"Loading..."</>;

  if (!monthWithReminders.length) return <>"Reminders not found..."</>;

  return (
    <div className="days-container">
      <button
        onClick={() => setShowDaysWithoutReminders(!showDaysWithoutReminders)}
      >
        Show {showDaysWithoutReminders ? "only days with events" : "all days"}
      </button>
      <div className="test">
        {monthWithReminders.map((reminderDay) => {
          return (
            <div>
              <Day
                key={reminderDay.date}
                date={reminderDay.date}
                reminders={reminderDay.reminders}
                showDayWithOutReminders={showDaysWithoutReminders}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
