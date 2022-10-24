import { useState } from 'react';
import styles from './Paginator.module.css'

export const Paginator = ({totalUsersCount: totalItemsCount, pageSize, currentPage, onPageChanged, portionSize}) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    const rigthPortionNumber = portionNumber * portionSize;

    const prevButton = () => {
        setPortionNumber(portionNumber - 1);
        onPageChanged((portionNumber - 1) * portionSize);
    }

    const nextButton = () => {
        setPortionNumber(portionNumber + 1);
        onPageChanged(portionNumber * portionSize + 1);
    }

    return (
        <div className={styles.paginator}>

            {portionNumber > 1 &&
                <button onClick={prevButton} className={styles.btn}>Prev</button>}

            {pages
                .filter(p => p >= leftPortionNumber && p <= rigthPortionNumber)
                .map(u => (
                    <span key={u} onClick={() => { onPageChanged(u) }} className={`${styles.page} ${currentPage === u ? styles.page_active : ''}`}>{u}</span>
                ))}

            {portionCount > portionNumber &&
                <button onClick={nextButton} className={styles.btn}>Next</button>}

        </div>
    );
}