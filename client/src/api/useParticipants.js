import { useState } from "react";
import useFetch from "../hooks/useFetch";

export default function useParticipants(id) {
    const [path, setPath] = useState(`/data/participants?where=tournamentId%20LIKE%20%22${id}%22&load=user%3D_ownerId%3Ausers`);
    const [data, isLoading, error, refetch] = useFetch(path, []);

    return [data, isLoading, error, refetch];
}