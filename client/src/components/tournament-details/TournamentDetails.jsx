import { Link, NavLink, Outlet, useParams } from 'react-router';
import useTournament from '../../api/useTournament';
import styles from './TournamentDetails.module.css'
import { formatDateFromTimestamp } from '../../utils/dateFormatter';
import { getStatusFromTimestamps } from '../../utils/common';
import ImagePlaceholder from '../image-placeholder/ImagePlaceholder';
import TournamentDetailsContent from './tournament-details-content/TournamentDetailsContent';

function TournamentDetails() {
    const { id } = useParams();
    const [data, isLoading, error] = useTournament(id);
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
                        {/* TODO: Make dynamic depending on the status */}
                        <button>Enroll</button>
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

                <Outlet context={{ data }} />
            </section>
        </div>
    );
}

export default TournamentDetails;