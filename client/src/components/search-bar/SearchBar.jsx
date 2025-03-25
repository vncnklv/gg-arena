import styles from './SearchBar.module.css';

import { Link } from 'react-router'

function SearchBar({ onSubmit, initialValue }) {

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const searchTerm = formData.get('search');
        onSubmit(searchTerm);
    }

    return (
        <div className={styles['search-bar-container']}>
            <form onSubmit={submitHandler} className={styles['search-form']}>
                <input type="text" name="search" className={styles['search-bar']} defaultValue={initialValue} />
                <input type="submit" value="Search" className={styles['search-btn']} />
            </form>
            <Link to='add' className={styles['add-btn']}>Add</Link> 
        </div>
    );
}

export default SearchBar;