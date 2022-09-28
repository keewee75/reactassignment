import { useContext } from "react";
import { UserContext } from "./UserContext";

const Home = () => {
const {value, setValue} = useContext(UserContext);
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p> Welcome! This site is created in React!</p>
      <p>{value}</p>
    </div>
  );
}

export default Home;
