import { authAPI, profileAPI } from './../api/api';
const SET_USER_DATA = 'SET-USER-DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_USER_IMG = 'SET-USER-IMG';

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
                ...action.data,
                isAuth: true
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_USER_IMG:
            return {
                ...state,
                img: action.img
            }
        default:
            return state;
    }
}

const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } });
const toggleIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching });
const setUserImg = imgUrl => ({ type: SET_USER_IMG, imgUrl });

export const auth = () => async dispatch => {
    dispatch(toggleIsFetching(true));
    try {
        const response = await authAPI.me();
        const data = response.data;
        if (data.resultCode === 0) {
            const { id, email, login } = data.data;
            dispatch(setAuthUserData(id, email, login));
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
        console.error('Ошибка в авторизации', e.message)
    }
}

export default authReducer;