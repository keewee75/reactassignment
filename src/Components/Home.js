import { useContext } from "react";
import { UserContext } from "./UserContext";

const Home = () => {
  const { value, setValue } = useContext(UserContext);
  return (
    <div className="home">
      <h1>Homepage</h1>
      <p> Welcome! This site is created in React!</p>
      <h2>React assignment (part 3)</h2>
      <p>
        Your assignment is to build a React Single Page Application (SPA) that
        serves as a Control & Manage System (CMS) for a people list. Your
        previous assignment will be used to provide the data. The page should
        have a list of people, which when clicked on will show detailed
        information about that person (their name, city, country & languages).
        This data should be possible to change and doing so should update the
        list both on the website but also in the database.
      </p>

      <p>{value}</p>
    </div>
  );
};

export default Home;
