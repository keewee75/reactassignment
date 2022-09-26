import Home from "./Components/Home";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PersonList from "./Components/PersonList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar">
          <h1>React Assignmnent</h1>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/Components/PersonList">Person List</Link>
          </div>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Components/PersonList" element={<PersonList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
