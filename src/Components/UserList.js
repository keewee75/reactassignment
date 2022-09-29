import { Table } from "react-bootstrap";
import uuid from "react-uuid";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";

// retrieve contacts from PersonList.js as props
export default function UserList({ contacts }) {
  //const {contacts} = useContext(UserContext)

  if (contacts.length === 0) {
    return <h5>The list is empty</h5>;
  } else {

    return (
      <Table className="w-100" bordered hover size="sm">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Nationality</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody className="tablelinks">
          {/* use .map to loop */}
          {contacts.map((contact) => (
            // <tr key={contact.email}>
            // changed to react-uuid for unique keys
            <tr key={uuid()}>
              <td>
              <Link to={`/Components/PersonDetails/${contact.firstname+contact.lastname}`}>
                {contact.firstname}
              </Link>
              </td>
              <td>{contact.lastname}</td>
              <td>{contact.age}</td>
              <td>{contact.nationality}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
