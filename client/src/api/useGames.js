import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function useGames() {
    const [searchTerm, setSearchTerm] = useState('');
    const [path, setPath] = useState('/data/games');
    const [data, isLoading, error] = useFetch(path, []);

    useEffect(() => {
        setPath(searchTerm ? `/data/games?where=name LIKE "${searchTerm}"` : '/data/games');
    }, [searchTerm]);

    const updateSearchTerm = (newTerm) => {
        // if(!newTerm) return;
        setSearchTerm(newTerm);
    }

    return [data, isLoading, error, updateSearchTerm];
}