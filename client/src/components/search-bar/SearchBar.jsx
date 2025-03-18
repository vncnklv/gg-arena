import styles from './SearchBar.module.css';

function SearchBar() {
    return (
        <div className={styles['search-bar-container']}>
            <form onSubmit={() => console.log('h1')} className={styles['search-form']}>
                <input type="text" name="search" className={styles['search-bar']} />
                <input type="submit" value="Search" className={styles['search-btn']} />
            </form>
        </div>
    );
}

export default SearchBar;