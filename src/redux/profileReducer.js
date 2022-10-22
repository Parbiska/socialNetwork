import { profileAPI } from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_USER_ID = 'profile/SET-USER-ID';
const SET_STATUS = 'profile/SET-STATUS';
const DELETE_POST = 'profile/DELETE-POST';

const initialState = {
    profile: null,
    userId: null,
    status: '',
    posts: [
        { id: 1, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tempore.', likesCount: 10 },
        { id: 2, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tempore.', likesCount: 25 },
    ]
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
            case ADD_POST: 
                if (!!action.postText) {
                return {
                    ...state,
                    posts: [...state.posts, {
                        id: state.posts.length + 1,
                        message: action.postText,
                        likesCount: 0,
                    }],
                };
            };
            return {
                ...state,
            }
        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_ID:
            return {
                ...state, 
                userId: action.userId
            }
        case SET_STATUS:
            return {
                ...state, 
                status: action.status
            }
        case DELETE_POST: 
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        default:
            return state;
    }
};

const setStatus = status => ({ type: SET_STATUS, status });
const setUserProfile = profile => ({ type: SET_USER_PROFILE,  profile});
export const addPost = postText => ({ type: ADD_POST, postText });
export const deletePost = postId => ({ type: DELETE_POST, postId });


export const getProfile = userId => async dispatch => {
    try {
        const response = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
    }
    catch (e) {
        console.error(e.message)
    }
}

export const getStatus = userId => async dispatch => {
    try {
        const response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
    }
    catch (e) {
        console.error(e.message)
    }
}

export const updateStatus = status => async dispatch => {
    try {
        const response = await profileAPI.updateStatus(status);
        const data = response.data;
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        } else {
            console.error('Ошибка получения статуса');
        }
    }
    catch (e) {
        console.error(e.message)
    }
}

export default profileReducer;