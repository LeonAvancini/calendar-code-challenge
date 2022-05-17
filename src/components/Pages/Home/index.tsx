import { useQuery } from "react-query";

const Home = () => {
  const { isLoading, data } = useQuery("repoData", () =>
    fetch("http://localhost:3000/posts").then((res) => res.json()),
  );

  if (isLoading) return <>"Loading..."</>;

  return (
    <>
      {data.map((reminder) => {
        return (
          <div style={{ border: "1px solid red" }}>
            <div>{reminder.reminder_date}</div>
            <div>{reminder.reminder_description}</div>
            <div>{reminder.reminder_state}</div>
          </div>
        );
      })}
    </>
  );
};

export default Home;
