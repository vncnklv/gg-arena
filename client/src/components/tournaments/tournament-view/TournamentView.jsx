import { Link, useParams } from 'react-router';
import { formatDateFromTimestamp } from '../../../utils/dateFormatter';
import ImagePlaceholder from '../../image-placeholder/ImagePlaceholder';
import styles from './TournamentView.module.css';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TournamentView({ _id, name, platform, startDate, status, maxPlayers, imageUrl, game }) {
    const { id } = useParams();
    return (
        <Link to={`/tournament/${_id}`} >
            <article className={styles["tournament-container"]}>
                <div className={styles["tournament-image-section"]}>
                    {imageUrl
                        ? <img src={imageUrl} alt="logo" />
                        : <ImagePlaceholder />
                    }

                </div>
                <div className={styles["tournament-info-section"]}>
                    <p>{name}</p>
                    <p className={styles["tournament-start-date"]}>{formatDateFromTimestamp(startDate)}</p>
                </div>
                {id
                    ? <div className={styles["tournament-status-section"]}>
                        <p>{status}</p>
                    </div>
                    : <div className={styles["tournament-status-section"]}>
                        <FontAwesomeIcon icon={faGamepad} />
                        <p>{game?.name}</p>
                    </div>
                }

                <div className={styles["tournament-secondary-info-section"]}>
                    <p className={styles["dark-background"]}>{maxPlayers} players</p>
                    <p className={styles["dark-background"]}>{platform}</p>
                </div>
            </article>
        </Link>
    );
}

export default TournamentView;