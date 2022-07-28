import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC } from './../../redux/usersReducer';
import * as axios from 'axios';
import React from 'react';
import Users from './Users';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = pageNumber => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return <>
            <Users totalUsersCount={this.props.totalUsersCount}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                pageSize={this.props.pageSize}
                isFetching={this.props.isFetching}
            ></Users>
        </>
    }
};

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        follow: userId => dispatch(followAC(userId)),

        unfollow: userId => dispatch(unfollowAC(userId)),

        setUsers: users => dispatch(setUsersAC(users)),

        setCurrentPage: pageNumber => dispatch(setCurrentPageAC(pageNumber)),

        setTotalUsersCount: usersCount => dispatch(setTotalUsersCountAC(usersCount)),

        toggleIsFetching: isFetching => dispatch(toggleIsFetchingAC(isFetching)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);