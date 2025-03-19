import { Link } from 'react-router';
import styles from './GameView.module.css';

function GameView({ _id, name, imageUrl }) {
    return (
        <Link to={_id}>
            <article className={styles['game-container']}>
                <div className={styles['game-image-container']}>
                    <img
                        src={imageUrl}
                        alt={name}
                        className={styles['game-image']}
                    />
                </div>
                <p className={styles['game-title']}>{name}</p>
            </article>
        </Link>
    );
}

export default GameView;