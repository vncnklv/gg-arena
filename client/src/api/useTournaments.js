import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function useTournaments(gameId) {
    const [searchTerm, setSearchTerm] = useState('');
    const [path, setPath] = useState('/data/tournaments');
    const [data, isLoading, error] = useFetch(path, []);

    useEffect(() => {
        setPath(searchTerm 
            ? `/data/tournaments?where=name LIKE "${searchTerm}" AND gameId LIKE "${gameId}"` 
            : `/data/tournaments?where=gameId LIKE "${gameId}"`);
    }, [searchTerm]);

    const updateSearchTerm = (newTerm) => {
        // if(!newTerm) return;
        setSearchTerm(newTerm);
    }

    return [data, isLoading, error, updateSearchTerm];
}