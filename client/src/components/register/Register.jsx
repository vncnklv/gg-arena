import { Link, useNavigate } from 'react-router';
import { useAuth } from '../../providers/UserProvider';
import { useState } from 'react';

import styles from './Register.module.css'

function Register() {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        username: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
    });
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const { register, isLoading } = useAuth();

    const changeHandler = (e) => {
        setUserData(oldData => {
            const newData = { ...oldData }
            newData[e.target.name] = e.target.value
            return newData;
        });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(userData);

        try {
            await register(userData.username, userData.password, userData.confirmPassword, userData.email, userData.firstName, userData.lastName);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="container">
            <div className={styles['register-container']}>
                <form className={styles['register-form']} onSubmit={submitHandler}>

                    <label htmlFor="username" className={styles.label}>Username</label>
                    <input type="text" name="username" className={styles['text-input']} value={userData.username} onChange={changeHandler} />

                    <div className={styles.row}>
                        <div className={styles["input-set"]}>
                            <label htmlFor="password" className={styles.label}>Password</label>
                            <input type="password" name="password" className={styles['text-input']} value={userData.password} onChange={changeHandler} />
                        </div>

                        <div className={styles["input-set"]}>
                            <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
                            <input type="password" name="confirmPassword" className={styles['text-input']} value={userData.confirmPassword} onChange={changeHandler} />
                        </div>
                    </div>

                    <div className={styles["input-set"]}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input type="text" name="email" className={styles['text-input']} value={userData.email} onChange={changeHandler} />
                    </div>

                    <div className={styles.row}>
                        <div className={styles["input-set"]}>
                            <label htmlFor="firstName" className={styles.label}>First Name</label>
                            <input type="text" name="firstName" className={styles['text-input']} value={userData.firstName} onChange={changeHandler} />
                        </div>

                        <div className={styles["input-set"]}>
                            <label htmlFor="lastName" className={styles.label}>Last Name</label>
                            <input type="text" name="lastName" className={styles['text-input']} value={userData.lastName} onChange={changeHandler} />
                        </div>
                    </div>
                    {error && <p className={styles['error-message']}>{error}</p>}
                    <input type="submit" value='register' className={styles['submit-button']} />
                </form>
                <p className={styles['login-redirect']}>Already have an account? Login <Link to='/login'>here</Link>.</p>
            </div>
        </div>
    );
}

export default Register;