import useFetch from "../hooks/useFetch";

export default function useGame(id)
{
    return useFetch(`/data/games/${id}`, {});
}