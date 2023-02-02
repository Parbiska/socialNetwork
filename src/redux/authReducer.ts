import { securityAPI } from './../api/securityApi'
import { profileAPI } from './../api/profileApi'
import { authAPI } from './../api/authApi'
import { AppState } from './store'
import { ThunkAction } from 'redux-thunk'
import { ResultCodes, ResultCodeForCaptcha } from './../api/api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'auth/SET-USER-DATA'
const TOGGLE_IS_FETCHING = 'auth/TOGGLE-IS-FETCHING'
const SET_USER_IMG = 'auth/SET-USER-IMG'
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET-CAPTCHA-URL-SUCCESS'

const initialState = {
	isAuth: false,
	isFetching: false,
	id: null as number | null,
	email: null as string | null,
	login: null as string | null,
	imgUrl: null as string | null,
	captchaUrl: null as string | null
}

export type InitialState = typeof initialState

const authReducer = (state = initialState, action: { type: string; payload: object }): InitialState => {
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
			return state
	}
}

type Actions = SetAuthUserDataAction | ToggleIsFetchingAction | SetUserImgAction | GetCaptchaUrlSuccessAction

type SetAuthUserDataPayload = {
	id: number | null
	email: string | null
	login: string | null
	isAuth: boolean | null
}
type SetAuthUserDataAction = {
	type: typeof SET_USER_DATA
	payload: SetAuthUserDataPayload
}
const setAuthUserData = (
	id: number | null,
	email: string | null,
	login: string | null,
	isAuth: boolean
): SetAuthUserDataAction => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } })

type ToggleIsFetchingAction = {
	type: typeof TOGGLE_IS_FETCHING
	payload: { isFetching: boolean }
}
const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingAction => ({
	type: TOGGLE_IS_FETCHING,
	payload: { isFetching }
})

type SetUserImgAction = {
	type: typeof SET_USER_IMG
	payload: { imgUrl: string | null }
}
const setUserImg = (imgUrl: string | null): SetUserImgAction => ({ type: SET_USER_IMG, payload: { imgUrl } })

type GetCaptchaUrlSuccessAction = {
	type: typeof GET_CAPTCHA_URL_SUCCESS
	payload: { captchaUrl: string }
}
const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessAction => ({
	type: GET_CAPTCHA_URL_SUCCESS,
	payload: { captchaUrl }
})

type ThunkType = ThunkAction<Promise<void>, AppState, unknown, Actions>

export const auth = (): ThunkType => async (dispatch) => {
	dispatch(toggleIsFetching(true))
	try {
		const response = await authAPI.me()
		const data = response.data

		if (data.resultCode === ResultCodes.Success) {
			const { id, email, login } = data.data
			dispatch(setAuthUserData(id, email, login, true))
			dispatch(toggleIsFetching(false))
			try {
				const response = await profileAPI.getProfile(id)
				dispatch(setUserImg(response.data.photos.small))
			} catch (e) {
				const error = (e as Error).message
				console.error('Ошибка получения аватара', error)
			}
		}
	} catch (e) {
		const error = (e as Error).message
		console.error('Ошибка в авторизации', error)
	}
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
	try {
		const response = await securityAPI.getCaptcha()
		console.log(response)
		const captchaUrl = response.data.url
		dispatch(getCaptchaUrlSuccess(captchaUrl))
	} catch (e) {
		const error = (e as Error).message
		console.error('Ошибка получения каптчи', error)
	}
}

export const login =
	(email: string, password: string, rememberMe: boolean, captcha: string | null): ThunkType =>
	async (dispatch) => {
		try {
			const response = await authAPI.login(email, password, rememberMe, captcha)
			const data = response.data
			if (data.resultCode === ResultCodes.Success) {
				dispatch(auth())
			} else {
				if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
					dispatch(getCaptchaUrl())
				}
				const message = data.messages.length > 0 ? data.messages[0] : 'Something went wrong'
				//@ts-ignore
				dispatch(stopSubmit('login', { _error: message }))
			}
		} catch (e) {
			const error = (e as Error).message
			console.error('Ошибка авторизации', error)
		}
	}

export const logout = (): ThunkType => async (dispatch) => {
	try {
		const response = await authAPI.logout()
		const data = response.data
		if (data.resultCode === ResultCodes.Success) {
			dispatch(setAuthUserData(null, null, null, false))
			dispatch(setUserImg(null))
		}
	} catch (e) {
		const error = (e as Error).message
		console.error('Logout errror', error)
	}
}

export default authReducer
