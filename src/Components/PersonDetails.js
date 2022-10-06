import axios from "axios";
import uuid from "react-uuid";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PersonDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const userId = Number(id);

  useEffect(() => {
    axios.get("https://localhost:7260/ReactApi").then((response) => {
      setUser((existingData) => {
        //console.log(response);
        return response.data;
      });
    });
  }, []);

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
        {user
          .filter((person) => person.personId === userId)
          .map((filteredPerson) => (
            <li key={uuid()}>{filteredPerson.name}</li>
          ))}
      </div> */}
    </>
  );
};

export default PersonDetails;
