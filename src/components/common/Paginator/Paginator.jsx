import styles from './Paginator.module.css'

export const Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage}) => {
    const pages = [];

    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    for(let i = 1; i <= pagesCount && i <= 5; i++) {
        pages.push(<span key={i} onClick={() => { onPageChanged(i) }} className={`${styles.page} ${currentPage === i ? styles.page_active : ''}`}>{i}</span>)
    }
    
    return <div className={styles.pages}>
        {pages}
    </div>
}