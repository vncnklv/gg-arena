import { useParams, useSearchParams } from "react-router";
import { useState } from "react";

import useTournaments from "../../api/useTournaments";

import SearchBar from "../search-bar/SearchBar";
import StatusMenu from "./status-menu/StatusMenu";

import styles from './Tournaments.module.css';
import TournamentView from "./tournament-view/TournamentView";

function Tournaments() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { id } = useParams();
    const [status, setStatus] = useState('upcoming');
    const [tournaments] = useTournaments(6, 1, id, status, searchParams.get('search'));

    const statusUpdateHandler = (newStatus) => {
        setStatus(newStatus);
    }

    const updateSeachParams = (newSearchTerm) => {
        const params = new URLSearchParams();

        if (newSearchTerm) {
            params.set('search', newSearchTerm);
        }

        setSearchParams(params);
    }

    return (
        <div className="container">
            <div className={styles.submenu}>
                <StatusMenu status={status} updateStatus={statusUpdateHandler} />
                <SearchBar onSubmit={updateSeachParams} initialValue={searchParams.get('search') ?? ''} renderAddButton={!!id} />
            </div>

            <section className={styles["tournaments-list"]}>
                {tournaments.map(t => <TournamentView key={t._id} {...t} status={status} />)}
            </section>
        </div>
    );
}

export default Tournaments;