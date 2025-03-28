import { useState } from "react";
import useFetch from "../hooks/useFetch";

export default function useTournament(id) {
    const [path, setPath] = useState(`/data/tournaments/${id}?load=game%3DgameId%3Agames`);
    const [data, isLoading, error] = useFetch(path, {});

    return [data, isLoading, error];
}