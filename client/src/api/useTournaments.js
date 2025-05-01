import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function useTournaments(pageSize = 3, page = 1, gameId = null, status = 'upcoming', searchTerm = '') {
    const [path, setPath] = useState();
    const [data, isLoading, error] = useFetch(path, []);
    const [countPath, setCountPath] = useState();
    const [count] = useFetch(countPath, 0);
    const [statusFilter, setStatusFilter] = useState();

    useEffect(() => {
        if (status == 'ongoing') {
            setStatusFilter(`startDate < ${Date.now()} AND endDate > ${Date.now()}`);
        }
        else if (status == 'completed') {
            setStatusFilter(`endDate < ${Date.now()}`);
        }
        else {
            setStatusFilter(`startDate > ${Date.now()}`);
        }
    }, [status]);

    useEffect(() => {
        setPath(`/data/tournaments?where=${statusFilter}${searchTerm ? ` AND name LIKE "${searchTerm}"` : ''}${gameId ? ` AND gameId LIKE "${gameId}"` : ''}&offset=${pageSize * (page - 1)}&pageSize=${pageSize}&load=game%3DgameId%3Agames`);
    }, [statusFilter, page, searchTerm, gameId]);

    useEffect(() => {
        setCountPath(`/data/tournaments?where=${statusFilter}${searchTerm ? ` AND name LIKE "${searchTerm}"` : ''}${gameId ? ` AND gameId LIKE "${gameId}"` : ''}&count=1`)
    }, [statusFilter, searchTerm, gameId]);

    return [data, isLoading, error, count];
}