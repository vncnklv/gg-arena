import { use, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router";

export default function useTournaments(gameId, status, searchTerm) {
    const [path, setPath] = useState(`/data/tournaments?where=gameId LIKE "${gameId}"${searchTerm ? ` AND name LIKE "${searchTerm}"` : ''}`);
    const [data, isLoading, error] = useFetch(path, []);



    useEffect(() => {
        let statusFilter;
        if (status == 'ongoing') {
            statusFilter = ` AND startDate < ${Date.now()} AND endDate > ${Date.now()}`;
        }
        else if (status == 'completed') {
            statusFilter = ` AND endDate < ${Date.now()}`;
        }
        else {
            statusFilter = ` AND startDate > ${Date.now()}`;
        }

        setPath(`/data/tournaments?where=gameId LIKE "${gameId}"${searchTerm ? ` AND name LIKE "${searchTerm}"` : ''}${statusFilter}`);
    }, [searchTerm, status]);


    return [data, isLoading, error];
}