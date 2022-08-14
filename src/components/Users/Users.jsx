import User from './User/User';
import styles from './Users.module.css';
import Preloader from '../common/Preloader/Preloader';

const Users = props => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const pages = [];

    for(let i = 1; i <= pagesCount && i <= 5; i++) {
        pages.push(<span key={i} onClick={() => { props.onPageChanged(i) }} className={`${styles.page} ${props.currentPage === i ? styles.page_active : ''}`}>{i}</span>)
    }

    const users = props.users.map(u => <User isButtonPress={props.isButtonPress} key={u.id} follow={props.follow} unfollow={props.unfollow} photos={u.photos} id={u.id} followed={u.followed} name={u.name} status={u.status} location={u.location}></User>); 

    return (
        <div className={styles.users}>
            <h1>Users</h1>
            <div className={styles.pages}>
                {pages}
            </div>
                { props.isFetching ? <div className={styles.preloader}><Preloader></Preloader></div> : users }
        </div>
    )
}

export default Users;