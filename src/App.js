import { useState } from "react";
import UserForm from "./Components/UserForm";
import UserList from "./Components/UserList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import "./App.css";

function App() {
  const title = "React Assignment";
  const author = "created by Marko Kivi in";
  const link = "https://reactjs.org/";

  // create array using useState to store the contact form data.
  const [contacts, updateContacts] = useState([]);

  // update contact state.
  const addContact = (contact) => {
    updateContacts([...contacts, contact]);
  };

  return (
    <div className="App">
      <Container>
        <h1>{title}</h1>
        <p>
          {author} <a href={link}>React</a>
        </p>

        <Row className="justify-content-md-center">
          {/* pass addContact function to UserForm.js as props. */}
          <UserForm addContact={addContact} />
        </Row>

        <Row className="justify-content-md-center">
          {/* pass contacts to UserList.js as props. */}
          <UserList contacts={contacts} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
