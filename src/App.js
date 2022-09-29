import { useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import PersonList from "./Components/PersonList";
import PersonDetails from "./Components/PersonDetails";
import LoginForm from "./Components/LoginForm";
import Formcomponent from "./Components/Formcomponent";
import Listcomponent from "./Components/Listcomponent";
import Test from "./Components/Test";
import { UserContext } from "./Components/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  const [value, setValue] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileno, setMobileno] = useState("");
  
  return (
    <div className="App">
      <UserContext.Provider value={{value, setValue, name, setName, email, setEmail, mobileno, setMobileno }}>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/PersonList" element={<PersonList />} />
            <Route path="/Components/PersonDetails/:id/*" element={<PersonDetails />} />
            <Route path="/LoginForm" element={<LoginForm />} />
            <Route path="/Formcomponent" element={<Formcomponent />} />
            <Route path="/Listcomponent" element={<Listcomponent />} />
            <Route path="/Test" element={<Test />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
