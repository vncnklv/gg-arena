import { Link } from 'react-router';
import { formatDateFromTimestamp } from '../../utils/dateFormatter';
import styles from './TournamentMiniView.module.css'

function TournamentMiniView({ _id, name, maxPlayers, startDate }) {
    return (
        <div className={styles.tournament}>
            <h3>{name}</h3>
            <p>{formatDateFromTimestamp(startDate)} | {maxPlayers} Players</p>
            <Link to={`/tournament/${_id}`} className={styles.joinButton}>Join Now</Link>
        </div>
    );
}

export default TournamentMiniView;