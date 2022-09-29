import { UserContext } from './UserContext';
import { useContext, useState } from 'react';
import { Form, Button } from "react-bootstrap";

export default function Formcomponent() {
    const { name, email, mobileno, setName, setEmail, setMobileno } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const list = { name, email, mobileno };

    }

    return (

<div className="form-container w-50">
      <Form onSubmit={handleSubmit}>
        <h3>Contact Form</h3>

        <Form.Control
          size="sm"
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => { setName(e.target.value) }}
        />

        <Form.Control
          size="sm"
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
        />

        <Form.Control
          size="sm"
          type="number"
          placeholder="Mobile"
          value={mobileno}
          onChange={(e) => { setMobileno(e.target.value) }}
        />

        <p></p>
        <Button variant="primary" size="sm" type="submit">
          Submit Contact
        </Button>
        <p></p>
      </Form>
    </div>
        
    )
}