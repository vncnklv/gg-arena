import styles from './SearchBar.module.css';

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
        </div>
    );
}

export default SearchBar;