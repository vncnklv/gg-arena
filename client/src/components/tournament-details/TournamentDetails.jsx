import { NavLink, Outlet, useParams } from 'react-router';
import useTournament from '../../api/useTournament';
import styles from './TournamentDetails.module.css'
import { formatDateFromTimestamp } from '../../utils/dateFormatter';
import { getStatusFromTimestamps } from '../../utils/common';
import ImagePlaceholder from '../image-placeholder/ImagePlaceholder';
import useMutate from '../../hooks/useMutate';
import useParticipants from '../../api/useParticipants';
import { useEffect, useState } from 'react';
import { useAuth } from '../../providers/UserProvider';

function TournamentDetails() {
    const { id } = useParams();
    const [data] = useTournament(id);
    const [participants, participantsIsLoading, participantsError, participantsRefetch] = useParticipants(id);
    const [join] = useMutate(`/data/participants`, 'POST');
    const [joinRecord, setJoinRecord] = useState(false);
    const [leave, leaveData, leaveIsLoading, leaveError, updateLeavePath] = useMutate('', 'DELETE');
    const { user, isAuth } = useAuth();

    const status = getStatusFromTimestamps(data.startDate, data.endDate);
    const userCanJoin = isAuth && status == 'pending' && user._id != data._ownerId && participants.length < data.maxPlayers;

    useEffect(() => {
        const record = participants.find(p => p._ownerId == user?._id);
        setJoinRecord(record);
        updateLeavePath(`/data/participants/${record?._id}`);
    }, [participants, user]);

    const joinHandler = async () => {
        const _ = await join({
            tournamentId: id,
        });
        participantsRefetch();
    };

    const leaveHandler = async () => {
        await leave();
        participantsRefetch();
    }

    return (
        <div className="container">
            <section className={styles['tournament-details-wrapper']}>
                <header className={styles['tournament-details-header']}>
                    <div className={styles['torunament-logo-wrapper']}>
                        {data.imageUrl
                            ? <img src={data.imageUrl} alt="logo" />
                            : <ImagePlaceholder />
                        }
                    </div>
                    <div className={styles['tournament-main-info']}>
                        <h2>{data.name}</h2>
                        <p className={styles['tournament-date']}>{formatDateFromTimestamp(data.startDate)} - {formatDateFromTimestamp(data.endDate)}</p>
                        <p className={styles['tournament-status']}>{getStatusFromTimestamps(data.startDate, data.endDate)}</p>
                    </div>
                    <div className={styles['tournament-actions']}>
                        {joinRecord && <button onClick={leaveHandler}>Leave</button>}
                        {userCanJoin && !joinRecord && <button onClick={joinHandler}>Join</button>}
                    </div>
                </header>

                <section>
                    <ul className={styles['section-picker']}>
                        <li>
                            <NavLink
                                className={({ isActive }) => `${isActive ? styles['active'] : ''} ${styles['section-picker-link']}`}
                                to='details'>
                                Information
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => `${isActive ? styles['active'] : ''} ${styles['section-picker-link']}`}
                                to='participants'>
                                Participans
                            </NavLink>
                        </li>
                    </ul>
                </section>

                <Outlet context={{ data, participants, participantsRefetch }} />
            </section>
        </div>
    );
}

export default TournamentDetails;