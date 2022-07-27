import User from './User/User';
import styles from './Users.module.css';
import * as axios from 'axios';
import React from 'react';

class Users extends React.Component {

    componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount)
                });  
    }

    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then(response => this.props.setUsers(response.data.items));   
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        console.log(pagesCount);

        const pages = [];

        for(let i=1; i <= pagesCount && i <= 5; i++) {
            pages.push(<span onClick={() => { this.onPageChanged(i) }} className={`${styles.page} ${this.props.currentPage === i ? styles.page_active : ''}`}>{i}</span>)
        }

        return (
            <div className={styles.users}>
                <div className={styles.title}>Users</div>
                <div className={styles.pages}>
                    {console.log(pages)}
                    {pages}
                </div>
                {this.props.users.map(u => <User follow={this.props.follow} unfollow={this.props.unfollow} photos={u.photos} id={u.id} followed={u.followed} name={u.name} status={u.status} location={u.location}></User>)}
            </div>
        )
    }
};

export default Users;