import { Link, useNavigate, useParams, useSearchParams } from "react-router";
import { useEffect, useState } from "react";

import useTournaments from "../../api/useTournaments";

import SearchBar from "../search-bar/SearchBar";
import StatusMenu from "./status-menu/StatusMenu";

import styles from './Tournaments.module.css';
import TournamentView from "./tournament-view/TournamentView";
import useGame from "../../api/useGame";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faTrash, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import useMutate from "../../hooks/useMutate";
import { useAuth } from "../../providers/UserProvider";
import Paginator from "../paginator/Paginator";

function Tournaments() {
    const [searchParams, setSearchParams] = useSearchParams();

    const { id } = useParams();
    const [status, setStatus] = useState('upcoming');
    const pageSize = 6;
    const [page, setPage] = useState(searchParams.get('page') != null ? Number(searchParams.get('page')) : 1);
    const [tournaments, isLoading, error, count] = useTournaments(pageSize, page, id, status, searchParams.get('search'));
    const maxPage = Math.ceil(count / pageSize);    
    
    const [game] = useGame(id);
    const [deleteGame] = useMutate(`/data/games/${id}`, "DELETE");

    const navigate = useNavigate();

    const { user } = useAuth();

    const goToNextPage = () => {
        setPage(prev => prev == maxPage ? prev : ++prev);
    }

    const goToPrevPage = () => {
        setPage(prev => prev == 1 ? prev : --prev);
    }

    const deleteHandler = async () => {
        const confirmDialogText = `Are tou sure you want to delete ${game.name}`;
        if (window.confirm(confirmDialogText) == false) {
            return;
        }
        await deleteGame();
        navigate('/games');
    }

    const statusUpdateHandler = (newStatus) => {
        setStatus(newStatus);
    }

    const updateSeachParams = (newSearchTerm) => {
        const params = new URLSearchParams();

        if (newSearchTerm) {
            params.set('search', newSearchTerm);
            setPage(1);
        }

        setSearchParams(params);
    }

    return (
        <div className="container">
            {id && <div className={styles['game-header']}>
                <div className={styles['game-title']}>
                    <FontAwesomeIcon icon={faGamepad} className={styles['game-icon']} />
                    <h2>{game.name}</h2>
                </div>
                {user && game._ownerId == user._id && <div className={styles['game-actions']}>
                    <Link className={`${styles['game-icon']}`} to='edit' state={{ game }}>
                        <FontAwesomeIcon icon={faUserEdit} />
                    </Link>
                    <button className={`${styles['game-icon']}`} onClick={deleteHandler} >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
                }
            </div>
            }
            <div className={styles.submenu}>
                <StatusMenu status={status} updateStatus={statusUpdateHandler} />
                <SearchBar onSubmit={updateSeachParams} initialValue={searchParams.get('search') ?? ''} renderAddButton={!!id} />
            </div>

            <section className={styles["tournaments-list"]}>
                {tournaments.map(t => <TournamentView key={t._id} {...t} status={status} />)}
            </section>

            {count != 0 && <Paginator
                currentPage={page}
                goToNextPage={goToNextPage}
                goToPrevPage={goToPrevPage}
                maxPage={maxPage}
            />}
        </div>
    );
}

export default Tournaments;