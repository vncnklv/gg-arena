import { useNavigate, useParams } from 'react-router'
import { useState } from 'react';

import styles from './TournamentAdd.module.css'
import useMutate from '../../hooks/useMutate';
import { convertDatetoTimestap } from '../../utils/dateFormatter';

function TournamentAdd() {
    const [tournamentData, setTournamentData] = useState({
        imageUrl: '',
        name: '',
        platform: '',
        maxPlayers: 16,
        startDate: '',
        endDate: ''
    });
    const [error, setError] = useState('');
    const { id } = useParams();
    const [mutate, _, isLoading] = useMutate('/data/tournaments', 'POST');

    const navigate = useNavigate();

    const changeHandler = (e) => {
        setTournamentData(oldData => {
            const newData = { ...oldData }
            newData[e.target.name] = e.target.value
            return newData;
        });
    }

    // TO DO: add error handling.

    const submitHandler = async (e) => {
        e.preventDefault();

        const body = {
            ...tournamentData,
            startDate: convertDatetoTimestap(tournamentData.startDate),
            endDate: convertDatetoTimestap(tournamentData.endDate),
            gameId: id
        }

        const _ = await mutate(body);
        navigate('/games') // TO DO: navigate to tournament details page.
    }

    return (
        <div className="container">
            <div className={styles['form-container']}>
                <form onSubmit={submitHandler} className={styles['form']}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input id="name" type="text" name="name" className={styles['text-input']} onChange={changeHandler} value={tournamentData.name} />
                    <label htmlFor="imageUrl" className={styles.label}>Image</label>
                    <input id="imageUrl" type="text" name="imageUrl" className={styles['text-input']} onChange={changeHandler} value={tournamentData.imageUrl} />
                    <div className={styles.row}>
                        <div className={styles["input-set"]}>
                            <label htmlFor="platform" className={styles.label}>Platform</label>
                            <input id="platform" type="text" name="platform" className={styles['text-input']} onChange={changeHandler} value={tournamentData.platform} />
                        </div>
                        <div className={styles["input-set"]}>
                            <label htmlFor="maxPlayers" className={styles.label}>Max Players</label>
                            <input id="maxPlayers" type="number" name="maxPlayers" className={styles['text-input']} onChange={changeHandler} value={tournamentData.maxPlayers} />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles["input-set"]}>
                            <label htmlFor="startDate" className={styles.label}>Start Date</label>
                            <input id="startDate" type="date" name="startDate" className={styles['text-input']} onChange={changeHandler} value={tournamentData.startDate} />
                        </div>
                        <div className={styles["input-set"]}>
                            <label htmlFor="endDate" className={styles.label}>End Date</label>
                            <input id="endDate" type="date" name="endDate" className={styles['text-input']} onChange={changeHandler} value={tournamentData.endDate} />
                        </div>
                    </div>
                    {error && <p className={styles['error-message']}>{error}</p>}
                    <input type="submit" value='add' className={styles['submit-button']} disabled={isLoading} />
                </form>
            </div>
        </div>
    );
}

export default TournamentAdd;