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
                ...action.data
            }
        case TOGGLE_IS_FETCHING: 
            return {
                ...state,
                isFetching: action.isFetching,
                isAuth: true
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

export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } });
export const toggleIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setUserImg = imgUrl => ({ type: SET_USER_IMG, imgUrl })

export default authReducer;