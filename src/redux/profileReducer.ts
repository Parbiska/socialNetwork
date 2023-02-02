import { ProfileType, PostType, PhotosType } from './../types/types'
import { stopSubmit } from 'redux-form'
import { profileAPI } from '../api/profileApi'

const ADD_POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE'
const SET_STATUS = 'profile/SET-STATUS'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE-PHOTO-SUCCESS'
const SET_EDIT_MODE = 'profile/SET-EDIT-MODE'

const initialState = {
	profile: null as ProfileType | null,
	status: '',
	isEditMode: false,
	posts: [
		{ id: 1, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tempore.', likesCount: 10 },
		{ id: 2, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tempore.', likesCount: 25 }
	] as PostType[]
}

type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: { type: string; payload: any }): InitialStateType => {
	switch (action.type) {
		case ADD_POST:
			if (!!action.payload.postText) {
				return {
					...state,
					posts: [
						...state.posts,
						{
							id: state.posts.length + 1,
							message: action.payload.postText,
							likesCount: 0
						}
					]
				}
			}
			return {
				...state
			}
		case SAVE_PHOTO_SUCCESS:
			return {
				...state,
				profile: {
					...state.profile,
					photos: action.payload.photos
				} as ProfileType
			}
		case SET_USER_PROFILE:
		case SET_STATUS:
		case SET_EDIT_MODE:
			return {
				...state,
				...action.payload
			}
		default:
			return state
	}
}

type SetStatusType = {
	type: typeof SET_STATUS
	payload: { status: string }
}
const setStatus = (status: string): SetStatusType => ({ type: SET_STATUS, payload: { status } })

type SavePhotoSuccessType = {
	type: typeof SAVE_PHOTO_SUCCESS
	payload: { photos: PhotosType }
}
const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({
	type: SAVE_PHOTO_SUCCESS,
	payload: { photos }
})

type SetUserProfileType = {
	type: typeof SET_USER_PROFILE
	payload: { profile: object }
}
const setUserProfile = (profile: object): SetUserProfileType => ({ type: SET_USER_PROFILE, payload: { profile } })

type SetEditModeType = {
	type: typeof SET_EDIT_MODE
	payload: { isEditMode: boolean }
}
export const setEditMode = (isEditMode: boolean): SetEditModeType => ({ type: SET_EDIT_MODE, payload: { isEditMode } })

type AddPostType = {
	type: typeof ADD_POST
	payload: { postText: string }
}
export const addPost = (postText: string): AddPostType => ({ type: ADD_POST, payload: { postText } })

// export const deletePost = (postId: number) => ({ type: SAVE_PHOTO_SUCCESS, payload: { postId } });

export const getProfile = (userId: number) => async (dispatch: any) => {
	try {
		const response = await profileAPI.getProfile(userId)
		dispatch(setUserProfile(response.data))
	} catch (e: any) {
		console.error(e.message)
	}
}

export const getStatus = (userId: number) => async (dispatch: any) => {
	try {
		const response = await profileAPI.getStatus(userId)
		dispatch(setStatus(response.data))
	} catch (e: any) {
		console.error(e.message)
	}
}

export const updateStatus = (status: string) => async (dispatch: any) => {
	try {
		const response = await profileAPI.updateStatus(status)
		const data = response.data
		if (data.resultCode === 0) {
			dispatch(setStatus(status))
		} else {
			console.error('Ошибка получения статуса')
		}
	} catch (e: any) {
		console.error(e.message)
	}
}

export const savePhoto = (file: any) => async (dispatch: any) => {
	try {
		const response = await profileAPI.savePhoto(file)
		const data = response.data
		if (data.resultCode === 0) {
			dispatch(savePhotoSuccess(data.data.photos))
		} else {
			console.error('Ошибка получения фото')
		}
	} catch (e: any) {
		console.error('Ошибка загрузки фото', e.message)
	}
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: Function) => {
	try {
		const response = await profileAPI.saveProfile(profile)
		const userId = getState().auth.id
		if (response.data.resultCode === 0) {
			dispatch(getProfile(userId))
			dispatch(setEditMode(false))
		} else {
			dispatch(stopSubmit('edit-profile', { _error: response.data.messages[0] }))
		}
	} catch (e: any) {
		console.error('Ошибка отправки данных профиля', e.message)
	}
}

export default profileReducer
