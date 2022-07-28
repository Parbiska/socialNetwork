import User from './User/User';
import styles from './Users.module.css';
import * as axios from 'axios';

const Users = props => {

    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                 .then(response => {
                    props.setUsers(response.data.items);
                 });
        }
    }
    
    const users = props.users.map(u => <User follow={props.follow} unfollow={props.unfollow} photos={u.photos} id={u.id} followed={u.followed} name={u.name} status={u.status} location={u.location}></User>);

    return (
        <div className={styles.users}>
            <div className={styles.title}>Users</div>
            {users}
            <button onClick={getUsers}>Show</button>
        </div>
    );
};
