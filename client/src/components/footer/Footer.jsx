import logo from '/logo.png'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <img src={logo} alt="GG Arena Logo" />
            </div>
            <p>© 2025 GG Arena - All Rights Reserved</p>
        </footer>
    );
}

export default Footer;