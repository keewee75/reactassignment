import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";


const PersonList = () => {
      // create array using useState to store the contact form data.
  const [contacts, updateContacts] = useState([]);

  // update contact state.
   const addContact = (contact) => {
     updateContacts([...contacts, contact]);

  };

    return (
        <div className="personlist">
            <UserForm addContact={addContact} />
            <UserList contacts={contacts} />
        </div>
    );
}
 
export default PersonList;