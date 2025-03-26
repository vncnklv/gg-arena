import { useParams } from "react-router";
import useTournaments from "../../api/useTournaments";

function Tournaments() {
    const { id } = useParams();
    const [tournaments] = useTournaments(id);


     
    return (
        <h1>Tournaments</h1>
    );
}

export default Tournaments;