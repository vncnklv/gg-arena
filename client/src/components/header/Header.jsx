import styles from './Header.module.css';
import logo from '/logo.png'

function Header() {
    return (
        <header className={styles.header}>
            <a href="#">
                <section className={styles.logo}>
                    <img src={logo} alt="GG Arena Logo" className={styles['logo-image']} />
                    <span className={styles['logo-text']}>Arena</span>
                </section>
            </a>
            <nav>
                <ul className={styles['navigation-links']}>
                    <li className={styles['navigation-link']}><a href="#">Tournaments</a></li>
                    <li className={styles['navigation-link']}><a href="#">Leaderboard</a></li>
                    <li className={styles['navigation-link']}><a href="#">Games</a></li>
                </ul>
            </nav>
            <section>
                <ul className={styles['auth-links']}>
                    <li className={`${styles['auth-link']} ${styles['auth-login']}`}><a href="#">Login</a></li>
                    <li className={`${styles['auth-link']} ${styles['auth-register']}`}><a href="#">Register</a></li>
                </ul>
            </section>
        </header>
    );
}

export default Header;