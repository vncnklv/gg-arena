import { Link } from 'react-router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import { useAuth } from '../../providers/UserProvider'

import styles from './Header.module.css'
import logo from '/logo.png'

function Header() {
    const { isAuth, user } = useAuth();
    return (
        <header className={styles.header}>
            <Link to='/'>
                <section className={styles.logo}>
                    <img src={logo} alt="GG Arena Logo" className={styles['logo-image']} />
                    <span className={styles['logo-text']}>Arena</span>
                </section>
            </Link>
            <nav>
                <ul className={styles['navigation-links']}>
                    {/* <li className={styles['navigation-link']}>
                        <Link to='/tournaments'>Tournaments</Link>
                    </li> */}
                    <li className={styles['navigation-link']}>
                        <Link to='/tournaments'>Tournaments</Link>
                    </li>
                    <li className={styles['navigation-link']}>
                        <Link to='/games'>Games</Link>
                    </li>
                </ul>
            </nav>
            <section>
                {isAuth
                    ? (<ul className={styles['auth-links']}>
                        <li>{user?.email}</li>
                        {/* <li className={styles['auth-login']}>
                            <Link to='/user-profile' className={styles['auth-link']}>Profile</Link>
                        </li> */}
                        <li className={styles['auth-register']}>
                            <Link to='/logout' className={styles['auth-link']}>
                                <FontAwesomeIcon icon={faRightFromBracket} />
                            </Link>
                        </li>
                    </ul>)
                    : (<ul className={styles['auth-links']}>
                        <li className={styles['auth-login']}>
                            <Link to='/login' className={styles['auth-link']}>Login</Link>
                        </li>
                        <li className={styles['auth-register']}>
                            <Link to='/register' className={styles['auth-link']}>Register</Link>
                        </li>
                    </ul>)

                }
            </section>
        </header>
    );
}

export default Header;