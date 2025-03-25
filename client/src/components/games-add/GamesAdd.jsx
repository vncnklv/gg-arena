import { Link, useNavigate } from 'react-router'
import { useState } from 'react';

import styles from './GamesAdd.module.css'
import useMutate from '../../hooks/useMutate';

function GamesAdd() {
    const [gameData, setGameData] = useState({
        imageUrl: '',
        name: ''
    });
    const [error, setError] = useState('');
    const [mutate, _, isLoading] = useMutate('/data/games', 'POST');

    const navigate = useNavigate();

    const changeHandler = (e) => {
        setGameData(oldData => {
            const newData = { ...oldData }
            newData[e.target.name] = e.target.value
            return newData;
        });
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!gameData.imageUrl && !gameData.name) {
            setError("All fields are required!");
            return;
        }
        if (!gameData.imageUrl) {
            setError("Image not provided");
            return;
        }

        if (!gameData.name) {
            setError("Name not provided");
            return;
        }

        try {
            await mutate(gameData);
            navigate('/games');
        }
        catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className="container">
            <div className={styles['form-container']}>
                <form onSubmit={submitHandler} className={styles['form']}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input id="name" type="text" name="name" className={styles['text-input']} onChange={changeHandler} value={gameData.name} />
                    <label htmlFor="imageUrl" className={styles.label}>Image</label>
                    <input id="imageUrl" type="text" name="imageUrl" className={styles['text-input']} onChange={changeHandler} value={gameData.imageUrl} />
                    {error && <p className={styles['error-message']}>{error}</p>}
                    <input type="submit" value='add' className={styles['submit-button']} disabled={isLoading} />
                </form>
            </div>
        </div>
    );
}

export default GamesAdd;