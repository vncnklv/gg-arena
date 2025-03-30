import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatDateFromTimestamp } from '../../utils/dateFormatter';
import styles from './Comment.module.css'
import { faTrash, faUser, faUserEdit } from '@fortawesome/free-solid-svg-icons';

function Comment({ text, user, _createdOn }) {
    return (
        <article className={styles['comment']}>
            <header className={styles['comment-header']}>
                <div className={styles['comment-user-info']}>
                    <FontAwesomeIcon icon={faUser} className={styles['comment-user-icon']} />
                    <p>{user?.email}</p>
                </div>
                <p className={styles['comment-date']}>{formatDateFromTimestamp(_createdOn)}</p>
            </header>
            <div className={styles['comment-content']}>
                <p className={styles['comment-text']}>{text}</p>
                <div className={styles['comment-user-actions']}>
                    <button className={styles['comment-edit-button']}>
                        <FontAwesomeIcon icon={faUserEdit} />
                    </button>
                    <button className={styles['comment-delete-button']} >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </div>
        </article>
    );
}

export default Comment;