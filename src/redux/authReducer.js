import { stopSubmit } from 'redux-form';
import { authAPI, profileAPI } from './../api/api';
const SET_USER_DATA = 'auth/SET-USER-DATA';
const TOGGLE_IS_FETCHING = 'auth/TOGGLE-IS-FETCHING';
const SET_USER_IMG = 'auth/SET-USER-IMG';

const initialState = {
    isAuth: false,
    id: null,
    email: null,
    login: null,
    img: null,
    isFetching: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_USER_IMG:
            return {
                ...state,
                img: action.imgUrl
            }
        default:
            return state;
    }
}

const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } });
const toggleIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching });
const setUserImg = imgUrl => ({ type: SET_USER_IMG, imgUrl });

export const auth = () => async dispatch => {
    dispatch(toggleIsFetching(true));
    try {
        const response = await authAPI.me();
        const data = response.data;

        if (data.resultCode === 0) {
            const { id, email, login } = data.data;
            dispatch(setAuthUserData(id, email, login, true));
            dispatch(toggleIsFetching(false));
            try {
                const response = await profileAPI.getProfile(id);
                dispatch(setUserImg(response.data.photos.small));
            }
            catch (e) {
                console.error('Ошибка получения аватара', e.message)
            }
        } 
    }
    catch (e) {
        console.error('Ошибка в авторизации', e.message);
    }
}

export const login = (email, password, rememberMe) => async dispatch => {
    try {
        const response = await authAPI.login(email, password, rememberMe);
        const data = response.data;
        if (data.resultCode === 0) {
            dispatch(auth());
        } else {
            const message = data.messages.length > 0 ? data.messages[0] : 'Something went wrong';
            dispatch(stopSubmit('login', {_error: message}));
        }
    }
    catch (e) {
        console.error('Ошибка авторизации', e.message);
    }
}

export const logout = () => async dispatch => {
    try {
        const response = await authAPI.logout();
        const data = response.data;
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
    catch (e) {
        console.error('Logout errror', e.message);
    }
}

export default authReducer;