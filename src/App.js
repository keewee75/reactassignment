import { useState } from 'react';
import UserForm from './Components/UserForm';
import UserList from './Components/UserList';
import './App.css';

function App() {
  const title = "React Assignment";
  const author = "created by Marko Kivi in";
  const link = "https://reactjs.org/";
  const [contacts, updateContacts] = useState([]);

  const addContact = (contact) => {
    updateContacts([...contacts, contact]);
  };

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>{author} <a href={link}>React</a></p>
      </div>
      <UserForm addContact={addContact} />
      <UserList contacts={contacts} />
    </div>
  );
}

export default App;
