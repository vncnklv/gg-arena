import { Link, useNavigate } from 'react-router'

import { useAuth } from '../../providers/UserProvider';
import { useForm } from 'react-hook-form';

import styles from './Login.module.css'
import useLogin from '../../api/useLogin';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [login, loginIsLoading, loginError] = useLogin();

    const submitHandler = async (userData) => {
        await login(userData);
        navigate("/");
    }

    return (
        <div className="container">
            <div className={styles['login-container']}>
                <form onSubmit={handleSubmit(submitHandler)} className={styles['login-form']}>
                    <label htmlFor="email" className={styles.label}>
                        <span>Email</span>
                        {errors.email && <span className={styles['input-error']}>{errors.email.message}</span>}
                    </label>
                    <input
                        id="email"
                        type="text"
                        className={styles['text-input']}
                        {...register('email', {
                            required: "Email is required.",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Invalid email adderss.'
                            }
                        })}
                    />

                    <label htmlFor="password" className={styles.label}>
                        <span>Password</span>
                        {errors.password && <span className={styles['input-error']}>{errors.password.message}</span>}
                    </label>
                    <input
                        id="password"
                        type="password"
                        className={styles['text-input']}
                        {...register('password', { required: "Password is required." })}
                    />

                    {loginError && <p className={styles['error-message']}>{loginError}</p>}

                    <input type="submit" value='login' className={styles['submit-button']} disabled={loginIsLoading} />
                </form>
                <p className={styles['register-redirect']}>Do not have an account? Create one <Link to='/register'>here</Link>.</p>
            </div>
        </div>
    );
}

export default Login;