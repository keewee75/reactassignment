import { useParams } from "react-router-dom";

const PersonDetails = () => {
    const { id } = useParams();

    return (
        <div className="person-details">
            <h2>Person details page for id:</h2>
            <h2>{ id }</h2>
        </div>
    );
}
 
export default PersonDetails;