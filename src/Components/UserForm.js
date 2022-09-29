import { useState } from "react";
import { Form, Button } from "react-bootstrap";

// retrieve addContact function from PersonList.js as props.
export default function UserForm({ addContact }) {
  // useState hook to manage state in functional components.
  
  const [contactInfo, setContactInfo] = useState({
    firstname: "",
    lastname: "",
    age: "",
    nationality: "",
    email: "",
  });

  // update input fields.
  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  // submit data to addContact function.
  const handleSubmit = (event) => {
    event.preventDefault();
    addContact(contactInfo);
    // clear input fields after submit
    setContactInfo({
      firstname: "",
      lastname: "",
      age: "",
      nationality: "",
      email: "",
    });
  };

  return (
    <div className="form-container w-50">
      <Form onSubmit={handleSubmit}>
        <h3>Contact Form</h3>

        <Form.Control
          size="sm"
          type="text"
          name="firstname"
          placeholder="First Name"
          required
          value={contactInfo.firstname}
          onChange={handleChange}
        />

        <Form.Control
          size="sm"
          type="text"
          name="lastname"
          required
          placeholder="Last Name"
          value={contactInfo.lastname}
          onChange={handleChange}
        />

        <Form.Control
          size="sm"
          type="number"
          name="age"
          placeholder="Age"
          value={contactInfo.age}
          onChange={handleChange}
        />

        <Form.Control
          size="sm"
          type="text"
          name="nationality"
          placeholder="Nationality"
          value={contactInfo.nationality}
          onChange={handleChange}
        />

        <Form.Control
          size="sm"
          type="email"
          name="email"
          placeholder="Email"
          required
          value={contactInfo.email}
          onChange={handleChange}
        />

        <p></p>
        <Button variant="primary" size="sm" type="submit">
          Submit Contact
        </Button>
        <p></p>
      </Form>
    </div>
  );
}
