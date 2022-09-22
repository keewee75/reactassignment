import { Table } from "react-bootstrap";
import uuid from 'react-uuid';

// retrieve contacts from App.js as props
export default function UserList({contacts}) {
    if (contacts.length === 0)
    {
        return (
            <h5>The list is empty</h5>
        );
    }
    else
    {
    return (
      
        <Table className="w-75" striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Nationality</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
        {/* use .map to loop */}
        {contacts.map((contact) => (

                // <tr key={contact.email}>
                // changed to react-uuid for unique keys
                <tr key={uuid()}>
                    <td>{contact.firstname}</td>
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
