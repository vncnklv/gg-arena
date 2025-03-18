import { Link } from 'react-router';
import styles from './Games.module.css';
import SearchBar from '../search-bar/SearchBar';

function Games() {
    return (
        <section className='container'>
            <SearchBar />
            <div className={styles['games-container']}>
                <Link>
                    <article className={styles['game-container']}>
                        <div className={styles['game-image-container']}>
                            <img
                                src="https://gaming-cdn.com/images/products/14565/orig/starcraft-3-pc-game-cover.jpg?v=1731494967"
                                alt="StarCraft 3"
                                className={styles['game-image']}
                            />
                        </div>
                        <p className={styles['game-title']}>StarCraft 3</p>
                    </article>
                </Link>
                <Link>
                    <article className={styles['game-container']}>
                        <div className={styles['game-image-container']}>
                            <img
                                src="https://static.wikia.nocookie.net/cswikia/images/3/37/Cs2_boxart.jpg"
                                alt="Counter Strike 2"
                                className={styles['game-image']}
                            />
                        </div>
                        <p className={styles['game-title']}>Counter Strike 2</p>
                    </article>
                </Link>
                <Link>
                    <article className={styles['game-container']}>
                        <div className={styles['game-image-container']}>
                            <img
                                src="https://gaming-cdn.com/images/products/14565/orig/starcraft-3-pc-game-cover.jpg?v=1731494967"
                                alt="Counter Strike 2"
                                className={styles['game-image']}
                            />
                        </div>
                        <p className={styles['game-title']}>StarCraft 3</p>
                    </article>
                </Link>
                <Link>
                    <article className={styles['game-container']}>
                        <div className={styles['game-image-container']}>
                            <img
                                src="https://gaming-cdn.com/images/products/14565/orig/starcraft-3-pc-game-cover.jpg?v=1731494967"
                                alt="Counter Strike 2"
                                className={styles['game-image']}
                            />
                        </div>
                        <p className={styles['game-title']}>StarCraft 3</p>
                    </article>
                </Link>
                <Link>
                    <article className={styles['game-container']}>
                        <div className={styles['game-image-container']}>
                            <img
                                src="https://gaming-cdn.com/images/products/14565/orig/starcraft-3-pc-game-cover.jpg?v=1731494967"
                                alt="Counter Strike 2"
                                className={styles['game-image']}
                            />
                        </div>
                        <p className={styles['game-title']}>StarCraft 3</p>
                    </article>
                </Link>
            </div>
        </section>
    );
}

export default Games;