import axios from "axios";
import uuid from "react-uuid";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

const PersonDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [userCity, setUserCity] = useState([]);
  const userId = Number(id);

  useEffect(() => {
    axios.get("https://localhost:7260/ReactApi").then((response) => {
      setUser((existingData) => {
        //console.log(response);
        return response.data;
      });
    });
  }, []);

  useEffect(() => {
    axios.get("https://localhost:7260/ReactApi/getcities").then((response) => {
      setUserCity((existingData) => {
        //console.log(response);
        return response.data;
      });
    });
  }, []);

Object.values(userCity).map(x=>console.log(x))
//userCity.map((x) => console.log(x.city.cityName));

  return (
    <>
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

      {/* <div>
        <h5>City</h5>
        {Object.values(userCity)
          .filter((person) => person.personId === userId)
          .map((filteredPerson) => {
            return Object.values(filteredPerson.city).map((userc) => {
              return <li key={userc.cityId}>{userc.cityName}</li>;
            });
          })}
      </div> */}
<p></p>
<div>

  {
    userCity
    .filter((person) => person.personId === userId)
    .map(x=>
      <div>
        <h5>City: {x.city.cityName}</h5>
        <p></p>
        <p>Country Id: {x.city.countryId}</p>
      </div>
      )
  }
</div>

    </>
  );
};

export default PersonDetails;
