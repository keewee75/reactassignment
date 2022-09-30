import UserForm from "./UserForm";
import UserList from "./UserList";

const PersonList = ({ contacts, addContact }) => {

    return (
        <div className="personlist">
            <UserForm addContact={addContact} />
            <UserList contacts={contacts} />
        </div>
    );
}
 
export default PersonList;