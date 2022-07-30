import { connect } from 'react-redux';
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFetching,
    toggleFollowingProgress
} from './../../redux/usersReducer';
import React from 'react';
import Users from './Users';
import { getUsers } from './../../api/api';
import { unfollowAPI, followAPI } from '../../api/api';

class UsersContainer extends React.Component {

    componentDidMount = async () => {
        this.props.toggleFetching(true);
        try {
            const data = await getUsers(this.props.currentPage, this.props.pageSize);
            this.props.toggleFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount)
        }
        catch(e) {
            console.error('Ошибка в получении пользователей', e.message)
        }
    }

    onPageChanged = async pageNumber => {
        this.props.toggleFetching(true);
        this.props.setCurrentPage(pageNumber);
        try {
            const data = await getUsers(pageNumber, this.props.pageSize);
            this.props.toggleFetching(false);
            this.props.setUsers(data.items);
        }
        catch(e) {
            console.error('Ошибка в получении пользователей', e.message)
        }
    }

    follow = async userId => {
        this.props.toggleFollowingProgress(true, userId);
        try {
            const data = await followAPI(userId);
            if (data.resultCode === 0) {
                this.props.follow(userId);
            }
        }
        catch(e) {
            console.error('Ошибка подписки', e.message);
        }
        this.props.toggleFollowingProgress(false, userId);
    }

    unfollow = async userId => {
        this.props.toggleFollowingProgress(true, userId);
        try {
            const data = await unfollowAPI(userId);
            if (data.resultCode === 0) {
                this.props.unfollow(userId);
            }
        }
        catch(e) {
            console.error('Ошибка подписки', e.message)
        }
        this.props.toggleFollowingProgress(false, userId);
    }

    render() {
        return <>
            <Users isButtonPress={this.props.isButtonPress} 
            onPageChanged={this.onPageChanged} 
            users={this.props.users} 
            follow={this.follow} 
            unfollow={this.unfollow}></Users>
        </>
    }
};

const mapStateToProps = state => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isButtonPress: state.usersPage.isFollowingInProgress
}
);

export default connect(mapStateToProps,
    { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleFetching, toggleFollowingProgress })(UsersContainer);