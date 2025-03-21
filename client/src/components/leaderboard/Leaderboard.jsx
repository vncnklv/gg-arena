import trophy from '/trophy.png'

import styles from './Leaderboard.module.css'

function Leaderboard() {
    return (
        <div className="container">
            <table className={styles['tournaments-table']}>
                <thead className={styles['table-header']}>
                    <tr className={styles['table-row']}>
                        <th></th>
                        <th className={styles['player-name-cell']}>Player</th>
                        <th className={styles['game-name-cell']}>Last played game</th>
                        <th>Wins</th>
                        <th>Trophies</th>
                    </tr>
                </thead>
                <tbody className={styles['table-body']}>
                    {/* Use this one */}
                    <tr className={styles['table-row']}>
                        <td className={styles['position-cell']}>01</td>
                        <td className={styles['player-name-cell']}>
                            <p className={styles['no-text-overflow']}>Player Playeraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                            <p className={styles['no-text-overflow']}>@player</p>
                        </td>
                        <td className={`${styles['game-name-cell']} ${styles['no-text-overflow']}`}>Counter Strikeaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</td>
                        <td>25</td>
                        <td className={styles['trophies-cell']}>
                            <p>100</p>
                            <img src={trophy} alt="Trophy Symbol" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Leaderboard;

// <tr className={styles['table-row']}>
//     <td className={styles['position-cell']}>02</td>
//     <td className={styles['player-name-cell']}>
//         <p>Player Player</p>
//         <p>@player</p>
//     </td>
//     <td>Counter Strike</td>
//     <td>25</td>
//     <td className={styles['trophies-cell']}>
//         <p>100</p>
//         <img src={trophy} alt="Trophy Symbol" />
//     </td>
// </tr>
// <tr className={styles['table-row']}>
//     <td className={styles['position-cell']}>03</td>
//     <td className={styles['player-name-cell']}>
//         <p>Player Player</p>
//         <p>@player</p>
//     </td>
//     <td>Counter Strike</td>
//     <td>25</td>
//     <td className={styles['trophies-cell']}>
//         <p>100</p>
//         <img src={trophy} alt="Trophy Symbol" />
//     </td>
// </tr>
// <tr className={styles['table-row']}>
//     <td className={styles['position-cell']}>04</td>
//     {/* Todo: Link to user profile */}
//     <td className={styles['player-name-cell']}>
//         <p>Player Player</p>
//         <p>@player</p>
//     </td>
//     {/* Todo: Link to the game */}
//     <td>Counter Strike</td>
//     <td>25</td>
//     <td className={styles['trophies-cell']}>
//         <p>100</p>
//         <img src={trophy} alt="Trophy Symbol" />
//     </td>
// </tr>