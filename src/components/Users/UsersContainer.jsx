import { connect } from 'react-redux';
import {
    follow,
    unfollow,
    getUsers,
    setCurrentPage
} from '../../redux/usersReducer';
import React from 'react';
import Users from './Users';

class UsersContainer extends React.Component {

    componentDidMount = () => {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    follow = userId => {
        this.props.follow(userId);
    }

    unfollow = async userId => {
        this.props.unfollow(userId);
    }

    render() {
        return <>
            <Users isButtonPress={this.props.isButtonPress} 
            onPageChanged={this.onPageChanged} 
            users={this.props.users} 
            follow={this.follow} 
            unfollow={this.unfollow}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}></Users>
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

export default connect(mapStateToProps, { follow, unfollow, getUsers, setCurrentPage })(UsersContainer);