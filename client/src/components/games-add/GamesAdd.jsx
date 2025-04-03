import { useNavigate } from 'react-router'
import useMutate from '../../hooks/useMutate'
import { useForm } from 'react-hook-form'

import styles from './GamesAdd.module.css'

function GamesAdd() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [mutate, _, isLoading, error] = useMutate('/data/games', 'POST');

    const navigate = useNavigate();

    const submitHandler = async (gameData) => {
        await mutate(gameData);
        navigate('/games');
    }

    return (
        <div className="container">
            <div className={styles['form-container']}>
                <form onSubmit={handleSubmit(submitHandler)} className={styles['form']}>

                    <label htmlFor="name" className={styles.label}>
                        <span>Name</span>
                        {errors.name && <span className={styles['input-error']}>{errors.name.message}</span>}
                    </label>
                    <input
                        id="name"
                        type="text"
                        className={styles['text-input']}
                        {...register('name', {
                            required: "Name is required."
                        })}
                    />

                    <label htmlFor="imageUrl" className={styles.label}>
                        <span>Image</span>
                        {errors.imageUrl && <span className={styles['input-error']}>{errors.imageUrl.message}</span>}
                    </label>
                    <input
                        id="imageUrl"
                        type="text"
                        className={styles['text-input']}
                        {...register('imageUrl', {
                            required: "Image is required."
                        })}
                    />

                    {error && <p className={styles['error-message']}>{error}</p>}

                    <input type="submit" value='add' className={styles['submit-button']} disabled={isLoading} />
                </form>
            </div>
        </div>
    );
}

export default GamesAdd;