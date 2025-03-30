import { useState } from 'react';
import styles from './AddCommentForm.module.css'

function AddCommentForm({ onSubmit }) {
    const [error, setError] = useState('');
    const submitHandler = (formData) => {
        const comment = formData.get('comment');
        if (!comment) {
            setError('The comment is empty.');
            return;
        }
        
        setError('');
        onSubmit(comment);
    }

    return (
        <>
            <form action={submitHandler} className={styles['comment-form']}>
                <textarea type="text" name="comment" id="comment" rows="3" className={styles['add-comment-textarea']} />
                <input type="submit" value="comment" className={styles['add-comment-btn']} />
            </form>
            {error && <p className={styles['error-message']}>{error}</p>}
        </>
    );
}

export default AddCommentForm;