// import { createSelector } from 'reselect';

export const getUsers = state => state.usersPage.users;

export const getPageSize = state => state.usersPage.pageSize;

export const getTotalUsersCount = state => state.usersPage.totalUsersCount;

export const getCurrnetPage = state => state.usersPage.currentPage;

export const getIsFetching = state => state.usersPage.isFetching;

export const getIsFollowingInProgress = state => state.usersPage.isFollowingInProgress;

// export const getUsersSelector = state => getUsers(state).filter( u => true);

// export const getUsersSuperSelector = createSelector(getUsers, users => {
//     return users.filter( u => true)
// });