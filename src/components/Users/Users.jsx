import User from './User/User';
import styles from './Users.module.css';
import Preloader from '../common/Preloader/Preloader';
import { Paginator } from '../common/Paginator/Paginator.jsx';

const Users = ({users, isButtonPress, follow, unfollow, isFetching, ...props}) => {
    const loadUsers = users.map(u => <User isButtonPress={isButtonPress} key={u.id} follow={follow} unfollow={unfollow} photos={u.photos} id={u.id} followed={u.followed} name={u.name} status={u.status} location={u.location}></User>); 
    
    return (
        <div className={styles.users}>
            <h1>Users</h1>
            
            <Paginator { ...props } portionSize={10}></Paginator>

            { isFetching ? <div className={styles.preloader}><Preloader></Preloader></div> : loadUsers }
        </div>
    )
}

export default Users;