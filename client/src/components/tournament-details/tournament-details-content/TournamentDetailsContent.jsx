import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faUsers } from '@fortawesome/free-solid-svg-icons';

import styles from './TournamentDetailsContent.module.css'
import { useOutletContext, useParams } from 'react-router';
import AddCommentForm from '../../add-comment-form/AddCommentForm';
import useMutate from '../../../hooks/useMutate';
import useComments from '../../../api/useComments';
import { useAuth } from '../../../providers/UserProvider';

function TournamentDetailsContent() {
    const { id } = useParams();
    const { data } = useOutletContext();
    const [comments, commentsAreLoading, commentsError, commentsRefetch, commentsClear, commentsUpdate] = useComments(id);
    const [addComment] = useMutate('/data/comments', 'POST');
    const { user } = useAuth();

    const addCommentHandler = async (comment) => {
        const newComment = await addComment({
            text: comment,
            tournamentId: id
        });

        commentsUpdate(prevComments => [...prevComments, { ...newComment, user }]);
    }

    return (
        <div className={styles['tournament-content']}>
            <section className={styles['tournament-description']}>
                <h3 className={styles['section-title']}>Information</h3>
                <div className={styles['tournament-attributes']}>
                    <div className={styles['attribute']}>
                        <div className={styles['attribute-icon']}>
                            <FontAwesomeIcon icon={faLayerGroup} />
                        </div>
                        <div className={styles['attribute-content']}>
                            <p>{data.game?.name}</p>
                            <p>{data.platform}</p>
                        </div>
                    </div>
                    <div className={styles['attribute']}>
                        <div className={styles['attribute-icon']}>
                            <FontAwesomeIcon icon={faUsers} />
                        </div>
                        <div className={styles['attribute-content']}>
                            <p>Size</p>
                            <p>{data.maxPlayers}</p>
                        </div>
                    </div>
                </div>
                {data.description && (
                    <div className={styles['description']}>
                        <p>{data.description}</p>
                    </div>
                )}
                <div className={styles['tournament-organiser']}>
                    <h4>Organiser</h4>
                    <p>name</p>
                    <p>email</p>
                </div>
            </section>
            <aside className={styles['tournament-comments']}>
                <h3 className={styles['section-title']}>Comments</h3>
                <AddCommentForm onSubmit={addCommentHandler} />
            </aside>
        </div>
    );
}

export default TournamentDetailsContent;