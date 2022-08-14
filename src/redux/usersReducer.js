import { getUsersAPI, unfollowAPI, followAPI } from '../api/api';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? { ...u, followed: true } : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? { ...u, followed: false } : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: [ ...action.users ]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            }
        case SET_TOTAL_USERS_COUNT: 
            return {
                ...state, 
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING: 
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS: 
            return {
                ...state,
                isFollowingInProgress: action.isFetching 
                ? [...state.isFollowingInProgress, action.userId] 
                : [state.isFollowingInProgress.filter(id => id !== action.userId)]
            }
        default:
            return state;
    }
};

const followSuccess = userId => ({ type: FOLLOW, userId });
const unfollowSuccess = userId => ({ type: UNFOLLOW, userId });
const setUsers = users => ({ type: SET_USERS, users });
const setTotalUsersCount = count => ({ type: SET_TOTAL_USERS_COUNT, count });
const toggleFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });
export const setCurrentPage = pageNumber => ({type: SET_CURRENT_PAGE, pageNumber});

export const getUsers = (currentPage, pageSize) => async dispatch => {
    dispatch(toggleFetching(true));
    try {
        const data = await getUsersAPI(currentPage, pageSize);
        dispatch(toggleFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
    catch(e) {
        console.error('Ошибка в получении пользователей', e.message)
    }
};

export const follow = userId => async dispatch => {
    dispatch(toggleFollowingProgress(true, userId));
        try {
            const data = await followAPI(userId);
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
        }
        catch(e) {
            console.error('Ошибка подписки', e.message);
        }
        dispatch(toggleFollowingProgress(false, userId));
};

export const unfollow = userId => async dispatch => {
    dispatch(toggleFollowingProgress(true, userId));
        try {
            const data = await unfollowAPI(userId);
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }
        }
        catch(e) {
            console.error('Ошибка подписки', e.message);
        }
        dispatch(toggleFollowingProgress(false, userId));
};

export default usersReducer;