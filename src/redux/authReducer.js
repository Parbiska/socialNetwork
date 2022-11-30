import { stopSubmit } from 'redux-form';
import { authAPI, profileAPI, securityAPI } from './../api/api';

const SET_USER_DATA = 'auth/SET-USER-DATA';
const TOGGLE_IS_FETCHING = 'auth/TOGGLE-IS-FETCHING';
const SET_USER_IMG = 'auth/SET-USER-IMG';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET-CAPTCHA-URL-SUCCESS';

const initialState = {
    isAuth: false,
    id: null,
    email: null,
    login: null,
    imgUrl: null,
    isFetching: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case TOGGLE_IS_FETCHING:
        case SET_USER_IMG:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } });
const toggleIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, payload: { isFetching } });
const setUserImg = imgUrl => ({ type: SET_USER_IMG, payload: { imgUrl } });
const getCaptchaUrlSuccess = captchaUrl => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } });

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

export const getCaptchaUrl = () => async dispatch => {
    try {
        const response = await securityAPI.getCaptcha();
        console.log(response);
        const captchaUrl = response.data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl));
    }
    catch (e) {
        console.error('Ошибка получения каптчи', e.message);
    }
}

export const login = (email, password, rememberMe, captcha) => async dispatch => {
    try {
        const response = await authAPI.login(email, password, rememberMe, captcha);
        const data = response.data;
        if (data.resultCode === 0) {
            dispatch(auth());
        } else {
            if (data.resultCode === 10) {
                dispatch(getCaptchaUrl());
            } 
            const message = data.messages.length > 0 ? data.messages[0] : 'Something went wrong';
            dispatch(stopSubmit('login', { _error: message }));
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
            dispatch(setUserImg(null));
        }
    }
    catch (e) {
        console.error('Logout errror', e.message);
    }
}

export default authReducer;