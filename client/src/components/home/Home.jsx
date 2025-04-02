import { Link } from "react-router";
import styles from "./Home.module.css";
import { useAuth } from "../../providers/UserProvider";
import TournamentMiniView from "../tournament-mini-view/TournamentMiniView";
function Home() {
    const { isAuth } = useAuth();

    return (
        <div className="container">
            <div className={styles.homeContainer}>
                <header className={styles.hero}>
                    <h1>Welcome to GG Arena</h1>
                    <p>Compete, Win, and Become a Champion!</p>

                    <Link to={isAuth ? 'games' : 'login'} className={styles.ctaButton}>Join a Tournament</Link>
                </header>

                <section className={styles.howItWorks}>
                    <h2>How It Works</h2>
                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <h3>Choose a Game</h3>
                            <p>Pick from a variety of competitive games.</p>
                        </div>
                        <div className={styles.step}>
                            <h3>Join or Create</h3>
                            <p>Enter existing tournaments or host your own.</p>
                        </div>
                        <div className={styles.step}>
                            <h3>Compete & Win</h3>
                            <p>Battle it out and claim victory.</p>
                        </div>
                    </div>
                </section>

                <section className={styles.featuredTournaments}>
                    <h2>Featured Tournaments</h2>
                    <div className={styles.tournamentList}>
                        <TournamentMiniView />
                        <TournamentMiniView />
                        <TournamentMiniView />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;