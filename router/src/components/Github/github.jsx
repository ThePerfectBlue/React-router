import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/ThePerfectBlue")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex">
      <img src={data.avatar_url} alt="Avatar" width={250} />
      Github Followers: {data.created_at}
    </div>
  );
};

export default Github;

export const githubInfo = async () => {
  const response = await fetch("https://api.github.com/users/ThePerfectBlue");
  return response.json();
};
