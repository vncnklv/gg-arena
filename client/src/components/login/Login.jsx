import { Link, useNavigate } from 'react-router'
import { useState } from 'react';

import { useAuth } from '../../providers/UserProvider';

import styles from './Login.module.css'

function Login() {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const { login, isLoading } = useAuth();

    const changeHandler = (e) => {
        setUserData(oldData => {
            const newData = { ...oldData }
            newData[e.target.name] = e.target.value
            return newData;
        });
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!userData.email && !userData.password) {
            setError("Email and username not provided!");
            return;
        }
        if (!userData.email) {
            setError("Email not provided");
            return;
        }

        if (!userData.password) {
            setError("Password not provided");
            return;
        }

        try {
            await login(userData.email, userData.password);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="container">
            <div className={styles['login-container']}>
                <form onSubmit={submitHandler} className={styles['login-form']}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input id="email" type="text" name="email" className={styles['text-input']} onChange={changeHandler} value={userData.email} />
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <input id="password" type="password" name="password" className={styles['text-input']} onChange={changeHandler} value={userData.password} />
                    {error && <p className={styles['error-message']}>{error}</p>}
                    <input type="submit" value='login' className={styles['submit-button']} disabled={isLoading}/>
                </form>
                <p className={styles['register-redirect']}>Do not have an account? Create one <Link to='/register'>here</Link>.</p>
            </div>
        </div>
    );
}

export default Login;