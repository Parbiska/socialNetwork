import User from './User/User';
import styles from './Users.module.css';
import * as axios from 'axios';
import React from 'react';

class Users extends React.Component {

    constructor (props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
             .then(response => this.props.setUsers(response.data.items));
    }

    users = this.props.users.map(u => <User follow={this.props.follow} unfollow={this.props.unfollow} photos={u.photos} id={u.id} followed={u.followed} name={u.name} status={u.status} location={u.location}></User>);

    render = () => {
        return (
            <div className={styles.users}>
                <div className={styles.title}>Users</div>
                {this.users}
            </div>
        )
    }
};

export default Users;