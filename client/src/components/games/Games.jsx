import styles from './Games.module.css';
import SearchBar from '../search-bar/SearchBar';
import GameView from '../game-view/GameView';
import useFetch from '../../hooks/useFetch';

function Games() {
    const [games, isLoading, error] = useFetch("/data/games", []);

    return (
        <section className='container'>
            <SearchBar />
            <div className={styles['games-container']}>
                {games.map(game => <GameView key={game._id} {...game} />)}

            </div>
        </section>
    );
}

export default Games;