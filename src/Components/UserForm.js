import { useState } from "react";

export default function UserForm({addContact}) {

    // useState hook to manage state in functional components.
    const [contactInfo, setContactInfo] = useState({
        firstname: "",
        lastname: "",
        age: "",
        nationality: "",
        email: "",

    });

    // function to update input fields.
    const handleChange = (event) => {
        setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        addContact(contactInfo);
        setContactInfo({ firstname: "", lastname: "", age: "", nationality: "", email: "" });
      };

    return (
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <h3>Contact Form</h3>
          </div>
          <div>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={contactInfo.firstname}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={contactInfo.lastname}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={contactInfo.age}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="nationality"
              placeholder="Nationality"
              value={contactInfo.nationality}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={contactInfo.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <button>Submit Contact</button>
          </div>
        </form>
      </div>
    );
  }