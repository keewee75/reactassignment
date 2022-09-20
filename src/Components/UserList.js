export default function UserList({contacts}) {
    return (
      <div>
        {contacts.map((contact) => (
          <div className="card" key={contact.email}>
            <p className="card-name">{contact.firstname}</p>
            <p>{contact.lastname}</p>
            <p>{contact.age}</p>
            <p>{contact.nationality}</p>
            <p>{contact.email}</p>
          </div>
        ))}
      </div>
    );
  }