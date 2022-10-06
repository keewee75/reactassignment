import axios from "axios";
import { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const userName = useRef("");
  const phone = useRef("");
  const city = useRef("");
  // const language = useRef("");

  const navigate = useNavigate();

  function addUserHandler() {
    var payload = {
      name: userName.current.value,
      phoneNumber: phone.current.value,
      cityId: city.current.value,
      //   language: language.current.value
    };
    axios.post("https://localhost:7260/ReactApi", payload).then((response) => {
      console.log(response);
      navigate("/AllUsers");
    });
    console.log(payload);
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

          <Form.Control
            size="sm"
            type="number"
            name="city"
            required
            placeholder="City"
            ref={city}
          />

          {/* <Form.Control
            size="sm"
            type="text"
            name="language"
            placeholder="Language"
            ref={language}
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
