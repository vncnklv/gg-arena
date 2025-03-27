import styles from './StatusMenu.module.css';

function StatusMenu({ status, updateStatus }) {
    const clickHandler = (e) => {
        updateStatus(e.target.value);
    }

    return (
        <div className={styles["status-menu"]}>
            <input type="checkbox" value="upcoming" id="upcoming" checked={status == 'upcoming'} onChange={clickHandler} />
            <label htmlFor="upcoming" className={styles["toggle-button"]}>Upcoming</label>
            <input type="checkbox" value="ongoing" id="ongoing" checked={status == 'ongoing'} onChange={clickHandler} />
            <label htmlFor="ongoing" className={styles["toggle-button"]}>Ongoing</label>
            <input type="checkbox" value="completed" id="completed" checked={status == 'completed'} onChange={clickHandler} />
            <label htmlFor="completed" className={styles["toggle-button"]}>Completed</label>
        </div>
    );
}

export default StatusMenu;