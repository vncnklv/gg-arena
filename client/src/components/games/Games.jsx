import styles from './Games.module.css';
import SearchBar from '../search-bar/SearchBar';
import GameView from '../game-view/GameView';
import useGames from '../../api/useGames';
import { useSearchParams } from 'react-router';
import { useEffect } from 'react';

function Games() {
    const [games, isLoading, error, updateSearchTerm] = useGames();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        updateSearchTerm(searchParams.get('search'));
    }, []);

    const searchBarSubmitHandler = (term) => {
        updateSearchTerm(term);

        const params = new URLSearchParams();

        if (term) {
            params.set("search", term);
        }

        setSearchParams(params);
    }

    return (
        <section className='container'>
            <SearchBar onSubmit={searchBarSubmitHandler} initialValue={searchParams.get('search')}/>
            <div className={styles['games-container']}>
                {games.map(game => <GameView key={game._id} {...game} />)}
            </div>
        </section>
    );
}

export default Games;