import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { Form, Button } from "react-bootstrap";

const LoginForm = () => {
  const { value, setValue } = useContext(UserContext);
  const [name, setName] = useState();

  return (
    <div>

      {value ? (
        <>
        <h2>Logged in user: {value}</h2>
        
        <Button variant="primary" size="sm" type="submit"
          onClick={() => {
            setValue(null);
          }}
        >
          logout
        </Button>
        
        </>
      ) : (
        <>
        <h2>Login:</h2>
          <Form.Control className="form-container w-25"
          size="sm"
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <p></p>
          <Button variant="primary" size="sm" type="submit"
            onClick={async () => {
              const value = name;
              setValue(value);
            }}
          >
            login
          </Button>
          
        </>
      )}
    </div>
  );
};

export default LoginForm;
