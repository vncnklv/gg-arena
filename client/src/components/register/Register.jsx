import { Link, useNavigate } from 'react-router';

import styles from './Register.module.css'
import useRegister from '../../api/useRegister';
import { useForm } from 'react-hook-form';

function Register() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const navigate = useNavigate();
    const [userRegister, registerIsLoading, registerError] = useRegister();

    const submitHandler = async (userData) => {
        await userRegister(userData);
        navigate("/");
    }

    const userData = {};
    const changeHandler = () => { };
    return (
        <div className="container">
            <div className={styles['register-container']}>
                <form className={styles['register-form']} onSubmit={handleSubmit(submitHandler)}>

                    <label htmlFor="username" className={styles.label}>
                        <span>Username</span>
                        {errors.username && <span className={styles['input-error']}>{errors.username.message}</span>}
                    </label>
                    <input
                        id="username"
                        type="text"
                        className={styles['text-input']}
                        {...register('username', {
                            required: "Username is required.",
                            pattern: {
                                value: /^.{3,}$/,
                                message: 'Username should be atleast 3 characters long.'
                            }
                        })}
                    />

                    <div className={styles.row}>
                        <div className={styles["input-set"]}>
                            <label htmlFor="password" className={styles.label}>
                                <span>Password</span>
                                {errors.password && <span className={styles['input-error']}>{errors.password.message}</span>}
                            </label>
                            <input
                                id="password"
                                type="password"
                                className={styles['text-input']}
                                {...register('password', {
                                    required: "Password is required.",
                                    pattern: {
                                        value: /^.{5,}$/,
                                        message: 'Password is too short.'
                                    }
                                })}
                            />
                        </div>

                        <div className={styles["input-set"]}>
                            <label htmlFor="confirmPassword" className={styles.label}>
                                <span>Confirm Password</span>
                                {errors.confirmPassword && <span className={styles['input-error']}>{errors.confirmPassword.message}</span>}
                            </label>
                            <input
                                id="confirmPassword"
                                type="password"
                                className={styles['text-input']}
                                {...register('confirmPassword', {
                                    required: "Password is required.",
                                    validate: (value) => value === watch("password") || "Passwords do not match.",
                                })}
                            />
                        </div>
                    </div>

                    <div className={styles["input-set"]}>
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
                    </div>

                    <div className={styles.row}>
                        <div className={styles["input-set"]}>
                            <label htmlFor="lastName" className={styles.label}>
                                <span>First Name</span>
                                {errors.firstName && <span className={styles['input-error']}>{errors.firstName.message}</span>}
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                className={styles['text-input']}
                                {...register('firstName', {
                                    required: "First Name is required."
                                })}
                            />
                        </div>

                        <div className={styles["input-set"]}>
                            <label htmlFor="lastName" className={styles.label}>
                                <span>Last Name</span>
                                {errors.lastName && <span className={styles['input-error']}>{errors.lastName.message}</span>}
                            </label>
                            <input
                                id="lastName"
                                type="text"
                                className={styles['text-input']}
                                {...register('lastName', {
                                    required: "Last Name is required."
                                })}
                            />
                        </div>
                    </div>
                    {registerError && <p className={styles['error-message']}>{registerError}</p>}
                    <input type="submit" value='register' className={styles['submit-button']} disabled={registerIsLoading} />
                </form>
                <p className={styles['login-redirect']}>Already have an account? Login <Link to='/login'>here</Link>.</p>
            </div>
        </div>
    );
}

export default Register;