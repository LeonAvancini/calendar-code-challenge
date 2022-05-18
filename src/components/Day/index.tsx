import "./Styles.scss";
import { Reminder } from "../Pages/Home";

interface DayProps {
  date: string;
  reminders: Reminder[];
  showDayWithOutReminders?: boolean;
}
const Day = ({ date, reminders, showDayWithOutReminders }: DayProps) => {
  return (
    <>
      {!reminders.length ? (
        showDayWithOutReminders && (
          <div className="container">
            <div className="date-typography">{date}</div>
            <div>No reminders on this date</div>
            <button
              className="button-style"
              onClick={() => alert("Create reminder")}
            >
              Create reminder
            </button>
          </div>
        )
      ) : (
        <div className="container">
          <div className="date-typography">{date}</div>
          {/* Event quantity: {reminders.length} */}
          {reminders.map((reminder) => {
            return (
              <div key={reminder.id} className="reminder-container">
                <div>{reminder.description}</div>
                <div className="buttons-container">
                  <button
                    className="button-style"
                    onClick={() => alert("Edit reminder")}
                  >
                    Edit reminder
                  </button>
                  <button
                    className="button-style"
                    onClick={() => alert("Delete reminder")}
                  >
                    Delete reminder
                  </button>
                </div>
              </div>
            );
          })}
          <button
            className="button-style"
            onClick={() => alert("Create reminder")}
          >
            Create reminder
          </button>
        </div>
      )}
    </>
  );
};

export default Day;
