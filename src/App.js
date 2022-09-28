import { useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import PersonList from "./Components/PersonList";
import PersonDetails from "./Components/PersonDetails";
import LoginForm from "./Components/LoginForm";
import { UserContext } from "./Components/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  const [value, setValue] = useState(null);
  const providerValue = useMemo(() => ({value, setValue}), [value, setValue]);
  return (
    <div className="App">
      <UserContext.Provider value={providerValue}>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/PersonList" element={<PersonList />} />
            <Route path="/Components/PersonDetails/:id/*" element={<PersonDetails />} />
            <Route path="/LoginForm" element={<LoginForm />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
