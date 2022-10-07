import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import img from "../img/keewee.png";

export default function Navbar() {
    const {value, setValue} = useContext(UserContext);

  return (
  <nav className="navbar">
    <img className="keewee" src={img} />
    <h1>&nbsp;&nbsp; React Assignment</h1>

    <div className="links">
      <Link to="/">Home</Link>
      {/* <Link to="/PersonList">Person List</Link> */}
      <Link to="/AllUsers">Users</Link>
      { !value && <Link to="/LoginForm">Login</Link> }
      { value && <Link to={"/"} onClick={() => {setValue(null);}} >Logout</Link> }
      {value}
    </div>
  </nav>
  )
}
