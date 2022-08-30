import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_ID = 'SET-USER-ID';
const SET_STATUS = 'SET-STATUS';

const initialState = {
    profile: null,
    userId: null,
    status: '',
    posts: [
        { id: 1, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tempore.', likesCount: 10 },
        { id: 2, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tempore.', likesCount: 25 },
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            if (!!state.newPostText) {
                return {
                    ...state,
                    newPostText: '',
                    posts: [...state.posts, {
                        id: state.posts.length + 1,
                        message: state.newPostText,
                        likesCount: 0,
                    }],
                };
            };
            return {
                ...state,
            }

        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText
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
        default:
            return state;
    }
};

const setStatus = status => ({ type: SET_STATUS, status });
const setUserProfile = profile => ({ type: SET_USER_PROFILE,  profile});
export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = newText => ({ type: UPDATE_NEW_POST_TEXT, newText });


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