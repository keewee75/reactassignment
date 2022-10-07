import axios from "axios";
import uuid from "react-uuid";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import Delete from "../Pages/Delete";

const PersonDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [userCity, setUserCity] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [itemToDelete, setItemToDelete] = useState(0);
  const userId = Number(id);

  // Get all users from db
  useEffect(() => {
    axios.get("https://localhost:7260/ReactApi").then((response) => {
      setUser((existingData) => {
        return response.data;
      });
    });
  }, []);

  // Get all cities from db
  useEffect(() => {
    axios.get("https://localhost:7260/ReactApi/getcities").then((response) => {
      setUserCity((existingData) => {
        return response.data;
      });
    });
  }, []);

  // Delete user
  function deleteConfirmHandler() {
    axios
      .delete(`https://localhost:7260/ReactApi/${itemToDelete}`)
      .then((response) => {
        setUser((existingData) => {
          return existingData.filter((_) => _.id !== itemToDelete);
        });
        setItemToDelete(0);
        setShowModal(false);
        navigate("/AllUsers");
      });
  }

  // Added confirm delete popup
  function showConfirmPopupHandler(id) {
    setShowModal(true);
    setItemToDelete(id);
  }
  function closeConfirmPopupHandler() {
    setShowModal(false);
    setItemToDelete(0);
  }

  //Object.values(userCity).map(x=>console.log(x))
  //userCity.map((x) => console.log(x.city.cityName));

  return (
    <>
      <Delete
        showModal={showModal}
        title="Delete Confirmation"
        body="Are you sure to delete the user?"
        closeConfirmPopupHandler={closeConfirmPopupHandler}
        deleteConfirmHandler={deleteConfirmHandler}
      ></Delete>

      <Button
        variant="danger"
        size="sm"
        type="button"
        onClick={() => {
          showConfirmPopupHandler(id);
        }}
      >
        Delete User
      </Button>
      <p></p>

      <div className="person-details">
        {user
          .filter((person) => person.personId === userId)
          .map((filteredPerson) => (
            <h2 key={uuid()}>Details page for {filteredPerson.name}</h2>
          ))}
      </div>

      {/* <div>
        {user
        .map((item) => {
          return item.languages.map((language) => {
            return <li key={uuid()}>{language.languageName}</li>;
          });
        })}
      </div> */}
      <p></p>
      <div>
        <h5>Languages</h5>
        {user
          .filter((person) => person.personId === userId)
          .map((filteredPerson) => {
            return filteredPerson.languages.map((language) => {
              return <li key={uuid()}>{language.languageName}</li>;
            });
          })}
      </div>

      <p></p>
      <div>
        {userCity
          .filter((person) => person.personId === userId)
          .map((x) => (
            <div key={uuid()}>
              <div style={{display: "flex"}}>
              <h5>City:&nbsp;</h5>
              <p>{x.city.cityName}&nbsp;&nbsp;</p>
              </div>
              <div style={{display: "flex"}}>
              <h5>Phone number:&nbsp;</h5>
              <p>{x.phoneNumber}&nbsp;&nbsp;</p>
              </div>
              <div style={{display: "flex"}}>
              <h5>Country:&nbsp;</h5>
              <p> Id: {x.city.countryId}&nbsp;&nbsp;</p>
              </div>

            </div>
          ))}
      </div>
      
    </>
  );
};

export default PersonDetails;
