import { useNavigate, useParams } from 'react-router'
import useMutate from '../../hooks/useMutate'
import { useForm } from 'react-hook-form'

import { convertDatetoTimestap } from '../../utils/dateFormatter'

import styles from './TournamentAdd.module.css'

function TournamentAdd() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        defaultValues: {
            maxPlayers: 16,
        }
    });
    const { id } = useParams();
    const [mutate, _, isLoading, error] = useMutate('/data/tournaments', 'POST');

    const navigate = useNavigate();

    const submitHandler = async (tournamentData) => {
        const body = {
            ...tournamentData,
            startDate: convertDatetoTimestap(tournamentData.startDate),
            endDate: convertDatetoTimestap(tournamentData.endDate),
            gameId: id
        };

        const newTournament = await mutate(body);
        navigate(`/tournament/${newTournament._id}`);
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
                        {...register('imageUrl')}
                    />

                    <div className={styles.row}>
                        <div className={styles["input-set"]}>
                            <label htmlFor="platform" className={styles.label}>
                                <span>Platform</span>
                                {errors.platform && <span className={styles['input-error']}>{errors.platform.message}</span>}
                            </label>
                            <input
                                id="platform"
                                type="text"
                                className={styles['text-input']}
                                {...register('platform', {
                                    required: "Platform is required."
                                })}
                            />
                        </div>
                        <div className={styles["input-set"]}>
                            <label htmlFor="maxPlayers" className={styles.label}>
                                <span>Players</span>
                                {errors.maxPlayers && <span className={styles['input-error']}>{errors.maxPlayers.message}</span>}
                            </label>
                            <input
                                id="maxPlayers"
                                type="number"
                                className={styles['text-input']}
                                {...register('maxPlayers', {
                                    required: "Players are required."
                                })}
                            />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles["input-set"]}>
                            <label htmlFor="startDate" className={styles.label}>
                                <span>Start Date</span>
                                {errors.startDate && <span className={styles['input-error']}>{errors.startDate.message}</span>}
                            </label>
                            <input
                                id="startDate"
                                type="date"
                                className={styles['text-input']}
                                {...register('startDate', {
                                    required: "Start Date is required.",
                                    validate: (date) => convertDatetoTimestap(date) > Date.now() || "Cannot use prevous date."
                                })}
                            />
                        </div>
                        <div className={styles["input-set"]}>
                            <label htmlFor="endDate" className={styles.label}>
                                <span>End Date</span>
                                {errors.endDate && <span className={styles['input-error']}>{errors.endDate.message}</span>}
                            </label>
                            <input
                                id="endDate"
                                type="date"
                                className={styles['text-input']}
                                {...register('endDate', {
                                    required: "End Date is required.",
                                    validate: (date) => convertDatetoTimestap(date) >= convertDatetoTimestap(watch('startDate')) || "End date is before Start Date."
                                })}
                            />
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