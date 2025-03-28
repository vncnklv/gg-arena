import styles from './TournamentDetails.module.css'

function TournamentDetails() {
    return ( 
        <div className="container">
            <section className={styles['tournament-details-wrapper']}>
                <header className={styles['tournament-details-header']}>
                    <div className={styles['torunament-logo-wrapper']}>
                        <img src="https://play.toornament.com/media/file/8669819225508356098/logo_large" alt="Tournament logo" />
                    </div>
                    <div className={styles['tournament-main-info']}>    
                        <h2>title</h2>
                        <p className={styles['tournament-date']}>date</p>
                        <p className={styles['tournament-status']}>status</p>
                    </div>
                    <div className={styles['tournament-actions']}>
                        <button>Enroll</button>
                    </div>
                </header>
            </section>
        </div>
     );
}

export default TournamentDetails;