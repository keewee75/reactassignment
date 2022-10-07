import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const userName = useRef("");
  const phone = useRef("");
  const city = useRef("");
  // const language = useRef("");

  //   const [countries, setCountries] = useState([]);
  //   const [currentSelectedCountry, SetCurrentSelectedCountry] = useState("");

  ////////////////////Get Countries and Cities/////////////////////////
  const [fromCountires, setFromCountries] = useState([]);
  const [fromCities, setFromCities] = useState([]);

  let getData = async () => {
    let responseCountries = await axios.get(
      "https://localhost:7260/ReactApi/getcountries"
    );
    var countriesFromDb = responseCountries.data;
    setFromCountries(countriesFromDb);
  };

  useEffect(() => {
    getData();
    // axios
    //   .get("https://localhost:7260/ReactApi/getcountries")
    //   .then((response) => {
    //     setFromCountries((existingData) => {
    //       //console.log(response);
    //       return response.data;
    //     });
    //   });
  }, []);

  //   useEffect(() => {
  //     axios
  //       .get("https://localhost:7260/ReactApi/getcities")
  //       .then((response) => {
  //         setFromCities((existingData) => {
  //           //console.log(response);
  //           return response.data;
  //         });
  //       });
  //   }, []);

  const handleFromCountries = (e) => {
    const country = fromCountires.find(
      (country) => country.countryName === e.target.value
    );
    //setFromCountries(country.countryName);
    setFromCities(country.cities);
  };
  /////////////////////////////////////////////////////////////////////

  const navigate = useNavigate();

  function addUserHandler() {
    var payload = {
      name: userName.current.value,
      phoneNumber: phone.current.value,
      cityId: city.current.value,
      //   language: language.current.value
    };

    axios.post("https://localhost:7260/ReactApi", payload).then((response) => {
      //console.log(response);
      navigate("/AllUsers");
    });
    //console.log(payload);
  }

  return (
    <>
      <div className="form-container w-50">
        <Form>
          <h3>Contact Form</h3>

          <Form.Control
            size="sm"
            type="text"
            name="name"
            placeholder="Name"
            required
            ref={userName}
          />

          <Form.Control
            size="sm"
            type="text"
            name="phone"
            placeholder="phone"
            ref={phone}
          />

          <Form.Group controlId="custom-select">
            <Form.Control
              as="select"
              size="sm"
              onChange={(e) => handleFromCountries(e)}
            >
              <option className="d-none" value="">
                Select Country
              </option>
              {Object.values(fromCountires).map((country) => (
                <option
                  key={country.countryName}
                  //title={country.countryId}
                  value={country.countryName}
                >
                  {country.countryName}
                </option>
              ))}
            </Form.Control>

            <Form.Control as="select" size="sm" ref={city}>
              <option className="d-none" value="">
                Select City
              </option>
              {Object.values(fromCities).map((city) => (
                <option
                  key={city.cityId}
                  //title=""
                  value={city.cityId}
                >
                  {city.cityName}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          {/* <Form.Control
            size="sm"
            type="number"
            name="city"
            required
            placeholder="City"
            ref={city}
          /> */}

          <p></p>
          <Button
            variant="primary"
            size="sm"
            type="button"
            onClick={addUserHandler}
          >
            Submit Contact
          </Button>
          <p></p>
        </Form>
      </div>
    </>
  );
};

export default AddUser;
