import { useState } from "react";
import useFetch from "../hooks/useFetch";

export default function useTournament(id) {
    const [data, isLoading, error] = useFetch(`/data/tournaments/${id}?load=game%3DgameId%3Agames`, {});

    return [data, isLoading, error];
}