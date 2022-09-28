import { useParams } from "react-router-dom";

const PersonDetails = () => {
    const { id } = useParams();

    return (
        <div className="person-details">
            <h2>Person details: </h2>
            <p>{ id }</p>
        </div>
    );
}
 
export default PersonDetails;