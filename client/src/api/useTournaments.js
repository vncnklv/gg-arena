import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function useTournaments(pageSize = 3, page = 1, gameId = null, status = 'upcoming', searchTerm = '') {
    const [path, setPath] = useState('');
    const [data, isLoading, error] = useFetch(path, []);

    useEffect(() => {
        let statusFilter;
        if (status == 'ongoing') {
            statusFilter = `startDate < ${Date.now()} AND endDate > ${Date.now()}`;
        }
        else if (status == 'completed') {
            statusFilter = `endDate < ${Date.now()}`;
        }
        else {
            statusFilter = `startDate > ${Date.now()}`;
        }

        setPath(`/data/tournaments?where=${statusFilter}${searchTerm ? ` AND name LIKE "${searchTerm}"` : ''}${gameId ? ` AND gameId LIKE "${gameId}"` : ''}&offset=${pageSize * (page - 1)}&pageSize=${pageSize}&load=game%3DgameId%3Agames`);
    }, [searchTerm, status]);

    return [data, isLoading, error];
}