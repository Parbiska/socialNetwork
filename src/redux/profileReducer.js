import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_STATUS = 'profile/SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE-PHOTO-SUCCESS';
const SET_EDIT_MODE = 'profile/SET-EDIT-MODE';

const initialState = {
    profile: null,
    status: '',
    editMode: false,
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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                }
            }
        case SET_USER_PROFILE:
        case SET_STATUS:
        case SET_EDIT_MODE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};

const setStatus = status => ({ type: SET_STATUS, payload: { status } });
const savePhotoSuccess = photos => ({ type: SAVE_PHOTO_SUCCESS, photos });
const setUserProfile = profile => ({ type: SET_USER_PROFILE, payload: { profile } });
export const setEditMode = editMode => ({ type: SET_EDIT_MODE, payload: { editMode } });
export const addPost = postText => ({ type: ADD_POST, postText });
export const deletePost = postId => ({ type: SAVE_PHOTO_SUCCESS, postId });


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

export const savePhoto = file => async dispatch => {
    try {
        const response = await profileAPI.savePhoto(file);
        const data = response.data;
        if (data.resultCode === 0) {
            dispatch(savePhotoSuccess(data.data.photos));
        } else {
            console.error('Ошибка получения фото');
        }
    }
    catch (e) {
        console.error('Ошибка загрузки фото', e.message)
    }
}

export const saveProfile = profile => async (dispatch, getState) => {
    try {
        const response = await profileAPI.saveProfile(profile);
        const userId = getState().auth.id
        if (response.data.resultCode === 0) {
            dispatch(getProfile(userId));
            dispatch(setEditMode(false));
        } else {
            dispatch(stopSubmit('edit-profile', { _error: response.data.messages[0] }));
        }
    }
    catch (e) {
        console.error('Ошибка отправки данных профиля', e.message)
    }
}

export default profileReducer;