import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://localhost:7260/ReactApi").then((response) => {
      setUsers((existingData) => {
        console.log(response);
        return response.data;
      });
    });
  }, []);

  return (
    <>
      <Button
        variant="primary"
        size="sm"
        type="button"
        onClick={() => {
          navigate("/AddUser");
        }}
      >
        Add User
      </Button>
      <p></p>
      <Table className="w-100" bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody className="tablelinks">
          {/* use .map to loop */}
          {users.map((user) => (
            <tr key={user.personId}>
              <td>
                <Link to={`/Components/PersonDetails/${user.personId}`}>
                  {user.name}
                </Link>
              </td>
              <td>{user.phoneNumber}</td>
              <td>{user.cityId}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default AllUsers;
