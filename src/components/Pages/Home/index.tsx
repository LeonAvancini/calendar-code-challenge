import { useQuery } from "react-query";

const Home = () => {
  const { isLoading, data } = useQuery("repoData", () =>
    fetch("http://localhost:3000/posts/1").then((res) => res.json()),
  );

  if (isLoading) return <>"Loading..."</>;
  console.log("DATA", data);
  return <div></div>;
};

export default Home;
