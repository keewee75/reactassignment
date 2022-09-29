import React, { useState } from "react";

export default function Register() {
  const [user, setUser] = useState({ fullname: "", email: "", password: "" });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullname">Full Name</label>
      <input type="text" name="fullname" onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" onChange={handleChange} />
      <label htmlFor="password">Passoword</label>
      <input type="password" name="password" onChange={handleChange} />
      <button>Register</button>
    </form>
  );
}