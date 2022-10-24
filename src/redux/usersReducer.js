import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/helpers/objectHelpers';
const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE-IS-FOLLOWING-PROGRESS';

const initialState = {
    users: [],
    pageSize: 6,
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
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
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

export const requestUsers = (page, pageSize) => async dispatch => {
    dispatch(toggleFetching(true));
    try {
        const response = await usersAPI.getUsers(page, pageSize);
        const data = response.data;
        dispatch(toggleFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
    catch(e) {
        console.error('Ошибка в получении пользователей', e.message)
    }
};

const followunfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
        try {
            const response = await apiMethod(userId);
            const data = response.data;
            if (data.resultCode === 0) {
                dispatch(actionCreator(userId));
            }
        }
        catch(e) {
            console.error('Ошибка подписки', e.message);
        }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = userId => async dispatch => {
    followunfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
};

export const unfollow = userId => async dispatch => {
    followunfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
};

export default usersReducer;