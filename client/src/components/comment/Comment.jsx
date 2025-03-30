import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark, faTrash, faUser, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { formatDateFromTimestamp } from '../../utils/dateFormatter';

import useMutate from '../../hooks/useMutate';

import styles from './Comment.module.css'
import { useState } from 'react';
import { useAuth } from '../../providers/UserProvider';

function Comment({ _id, _ownerId, text, user: commentUser, _createdOn, onDelete, onEdit }) {
    const [deleteComment] = useMutate(`/data/comments/${_id}`, 'DELETE');
    const [editComment] = useMutate(`/data/comments/${_id}`, 'PATCH');
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState('');
    const { user } = useAuth();

    const deleteHandler = async () => {
        const confirmDialogText = `Are tou sure you want to delete the comment:\n${text}`;
        if (window.confirm(confirmDialogText) == false) {
            return;
        }
        const _ = await deleteComment();
        onDelete(_id);
    }

    const editHandler = async (formData) => {
        const text = formData.get('text');

        if (!text) {
            setError('Comment text cannot be empty.');
            return;
        }

        const updatedComment = await editComment({ text });
        onEdit(updatedComment);
        setIsEditing(false);
    }

    return (
        <article className={styles['comment']}>
            <header className={styles['comment-header']}>
                <div className={styles['comment-user-info']}>
                    <FontAwesomeIcon icon={faUser} className={styles['comment-user-icon']} />
                    <p>{commentUser?.email}</p>
                </div>
                <p className={styles['comment-date']}>{formatDateFromTimestamp(_createdOn)}</p>
            </header>
            <div className={styles['comment-content']}>
                {isEditing
                    ? <>
                        <form action={editHandler} className={styles['comment-edit-form']}>
                            <input type="text" name="text" className={styles['comment-edit-field']} defaultValue={text} />
                            <div className={styles['comment-user-actions']}>
                                <button type='submit'>
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </button>
                                <button className={styles['comment-edit-button']} >
                                    <FontAwesomeIcon icon={faCircleXmark} onClick={() => setIsEditing(false)} />
                                </button>
                            </div>
                        </form>
                        {error && <p className={styles['comment-error-text']}>{error}</p>}
                    </>
                    : <>
                        <p className={styles['comment-text']}>{text}</p>
                        {user && user._id == _ownerId &&
                            <div className={styles['comment-user-actions']}>
                                <button className={styles['comment-edit-button']} >
                                    <FontAwesomeIcon icon={faUserEdit} onClick={() => setIsEditing(prev => !prev)} />
                                </button>
                                <button className={styles['comment-delete-button']} onClick={deleteHandler}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        }
                    </>
                }
            </div>
        </article>
    );
}

export default Comment;