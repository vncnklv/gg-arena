import { Link } from 'react-router'

import styles from './Login.module.css'

function Login() {
    return (
        <div className="container">
            <div className={styles['login-container']}>
                <form className={styles['login-form']}>
                    <label htmlFor="username" className={styles.label}>Username</label>
                    <input type="text" name="username" className={styles['text-input']} />
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <input type="password" name="password" className={styles['text-input']} />
                    <p className={styles['error-message']}>Error message</p>
                    <input type="submit" value='login' className={styles['submit-button']} />
                </form>
                <p className={styles['register-redirect']}>Do not have an account? Create one <Link to='/register'>here</Link>.</p>
            </div>
        </div>
    );
}

export default Login;