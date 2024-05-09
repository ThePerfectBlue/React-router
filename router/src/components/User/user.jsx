import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return <div className="bg-yellow-100 p-10  text-center">User: {userid}</div>;
};

export default User;
