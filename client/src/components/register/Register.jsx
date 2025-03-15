import { Link } from 'react-router';
import styles from './Register.module.css'

function Register() {
    return (
        <div className="container">
            <div className={styles['register-container']}>
                <form className={styles['register-form']}>

                    <label htmlFor="username" className={styles.label}>Username</label>
                    <input type="text" name="username" className={styles['text-input']} />

                    <div className={styles.row}>
                        <div className={styles["input-set"]}>
                            <label htmlFor="password" className={styles.label}>Password</label>
                            <input type="password" name="password" className={styles['text-input']} />
                        </div>

                        <div className={styles["input-set"]}>
                            <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
                            <input type="password" name="confirmPassword" className={styles['text-input']} />
                        </div>
                    </div>

                    <div className={styles["input-set"]}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input type="text" name="email" className={styles['text-input']} />
                    </div>

                    <div className={styles.row}>
                        <div className={styles["input-set"]}>
                            <label htmlFor="firstName" className={styles.label}>First Name</label>
                            <input type="text" name="firstName" className={styles['text-input']} />
                        </div>

                        <div className={styles["input-set"]}>
                            <label htmlFor="lastName" className={styles.label}>Last Name</label>
                            <input type="text" name="lastName" className={styles['text-input']} />
                        </div>
                    </div>
                    <p className={styles['error-message']}>Error message</p>
                    <input type="submit" value='register' className={styles['submit-button']} />
                </form>
                <p className={styles['login-redirect']}>Already have an account? Login <Link to='/register'>here</Link>.</p>
            </div>
        </div>
    );
}

export default Register;