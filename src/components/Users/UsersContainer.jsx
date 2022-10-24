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
import { useEffect } from 'react';

const UsersContainer = props => {

    const requestUsers = props.requestUsers;

    useEffect(() => {
        requestUsers(props.currentPage, props.pageSize);
    }, [props.currentPage, props.pageSize, requestUsers]);

    const onPageChanged = pageNumber => {
        props.setCurrentPage(pageNumber);
        props.requestUsers(pageNumber, props.pageSize);
    }

    const follow = userId => {
        props.follow(userId);
    }

    const unfollow = async userId => {
        props.unfollow(userId);
    }
    
    return <>
        <Users isButtonPress={props.isButtonPress}
            onPageChanged={onPageChanged}
            users={props.users}
            follow={follow}
            unfollow={unfollow}
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}></Users>
    </>
}

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