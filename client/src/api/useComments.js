import useFetch from "../hooks/useFetch";

export default function useComments(id) {
    return useFetch(`/data/comments?where=tournamentId%20LIKE%20%22${id}%22&load=user%3D_ownerId%3Ausers&sortBy=_createdOn desc`, []);
}