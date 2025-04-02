import styles from './TournamentMiniView.module.css'

function TournamentMiniView() {
    return (
        <div className={styles.tournament}>
            <h3>Valorant Showdown</h3>
            <p>Prize: $500 | 16 Teams</p>
            <button className={styles.joinButton}>Join Now</button>
        </div>
    );
}

export default TournamentMiniView;