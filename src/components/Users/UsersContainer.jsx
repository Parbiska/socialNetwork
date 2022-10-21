import { connect } from 'react-redux';
import {
    follow,
    unfollow,
    requestUsers,
    setCurrentPage
} from '../../redux/usersReducer';
import React from 'react';
import Users from './Users';
import { getUsers, getPageSize, getTotalUsersCount, getCurrnetPage, getIsFetching, getIsFollowingInProgress, } from '../../redux/usersSelectors';

class UsersContainer extends React.Component {

    componentDidMount = () => {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber, this.props.pageSize);
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

const mapStateToProps = s => ({
    users: getUsers(s),
    pageSize: getPageSize(s),
    totalUsersCount: getTotalUsersCount(s),
    currentPage: getCurrnetPage(s),
    isFetching: getIsFetching(s),
    isButtonPress: getIsFollowingInProgress(s)
}
);

export default connect(mapStateToProps, { follow, unfollow, requestUsers, setCurrentPage })(UsersContainer);