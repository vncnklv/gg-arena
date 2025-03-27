import { formatDateFromTimestamp } from '../../../utils/dateFormatter';
import ImagePlaceholder from '../image-placeholder/ImagePlaceholder';
import styles from './TournamentView.module.css';

function TournamentView({ name, platform, startDate, status, maxPlayers, imageUrl }) {
    return (
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
            <div className={styles["tournament-status-section"]}>
                <p>{status}</p>
            </div>
            <div className={styles["tournament-secondary-info-section"]}>
                <p className={styles["dark-background"]}>{maxPlayers} players</p>
                <p className={styles["dark-background"]}>{platform}</p>
            </div>
        </article>
    );
}

export default TournamentView;