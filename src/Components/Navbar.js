import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext, useState } from "react";

export default function Navbar() {
    const {value, setValue} = useContext(UserContext);

  return (
  <nav className="navbar">
    <h1>React Assignment</h1>

    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/PersonList">Person List</Link>
      { !value && <Link to="/LoginForm">Login</Link> }
      { value && <Link to={"/"} onClick={() => {setValue(null);}} >Logout</Link> }
      {value}
    </div>
  </nav>
  )
}
