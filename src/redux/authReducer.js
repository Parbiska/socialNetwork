import { authMeAPI, getProfileAPI } from './../api/api';
const SET_USER_DATA = 'SET-USER-DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_USER_IMG = 'SET-USER-IMG';
// const TOGGLE_IS_AUTH = 'TOGGLE-IS-AUTH';

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
        // case TOGGLE_IS_AUTH: 
        //     return {
        //         ...state,
        //         isAuth: action.isAuth
        //     }
        default:
            return state;
    }
}

const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } });
const toggleIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching });
const setUserImg = imgUrl => ({ type: SET_USER_IMG, imgUrl });
// const toggleIsAuth = isAuth => ({ type: TOGGLE_IS_AUTH, isAuth });

export const auth = () => async dispatch => {
    dispatch(toggleIsFetching(true));
    try {
        const data = await authMeAPI();
        if (data.resultCode === 0) {
            dispatch(toggleIsFetching(false));
            const { id, email, login } = data.data;
            dispatch(setAuthUserData(id, email, login));
            try {
                const data = await getProfileAPI(id);
                dispatch(setUserImg(data.photos.small));
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