import { useEffect } from "react";
import { useOutletContext } from "react-router";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './TournamentParticipants.module.css';

function TournamentParticipants() {
    const { participants, participantsRefetch } = useOutletContext();

    useEffect(() => {
        participantsRefetch();
    }, []);

    return (
        <div className={styles['participants-wrapper']}>
            {participants.map(p => (
                <div key={p._id} className={styles['participant']}>
                    <div className={styles['icon']}>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <p className={styles['participant-username']}>{p.user.email}</p>
                </div>
            ))}
        </div>
    );
}

export default TournamentParticipants;