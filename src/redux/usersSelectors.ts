import { AppState } from './store';
// import { createSelector } from 'reselect';

export const getUsers = (state: AppState) => state.usersPage.users;

export const getPageSize = (state: AppState) => state.usersPage.pageSize;

export const getTotalUsersCount = (state: AppState) => state.usersPage.totalUsersCount;

export const getCurrnetPage = (state: AppState) => state.usersPage.currentPage;

export const getIsFetching = (state: AppState) => state.usersPage.isFetching;

export const getFollowingInProgress = (state: AppState) => state.usersPage.followingInProgress;

// export const getUsersSelector = state => getUsers(state).filter( u => true);

// export const getUsersSuperSelector = createSelector(getUsers, users => {
//     return users.filter( u => true)
// });