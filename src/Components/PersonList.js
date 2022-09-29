import { useState, useContext } from "react";
import Formcomponent from "./Formcomponent";
import Listcomponent from "./Listcomponent";
import { UserContext } from "./UserContext";
import UserForm from "./UserForm";
import UserList from "./UserList";


const PersonList = () => {
      // create array using useState to store the contact form data.
  const [contacts, updateContacts] = useState([]);
  //const [contacts, setContacts] = useState([]);


  // update contact state.
  const addContact = (contact) => {
    updateContacts([...contacts, contact]);
    //setContacts([...contacts, contact]);
  };

    return (
        <div className="personlist">
            {/* <UserForm addContact={addContact} />
            <UserList contacts={contacts} /> */}
            <Formcomponent />
            <Listcomponent />
            
        </div>


    );
}
 
export default PersonList;