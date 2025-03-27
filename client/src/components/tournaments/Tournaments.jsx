import { useParams, useSearchParams } from "react-router";
import { useState } from "react";

import useTournaments from "../../api/useTournaments";

import SearchBar from "../search-bar/SearchBar";
import StatusMenu from "./status-menu/StatusMenu";

import styles from './Tournaments.module.css';

function Tournaments() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { id } = useParams();
    const [status, setStatus] = useState('upcoming'); 
    const [tournaments] = useTournaments(id, status, searchParams.get('search'));

    const statusUpdateHandler = (newStatus) => {
        setStatus(newStatus);
    }

    return (
        <div className="container">
            <div className={styles.submenu}>
                <StatusMenu status={status} updateStatus={statusUpdateHandler}/>
                <SearchBar />
            </div>
        </div>
    );
}

export default Tournaments;