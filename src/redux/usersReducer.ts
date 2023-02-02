import { ResultCodes } from './../api/api'
import { AppState, InferActionsTypes } from './store'
import { UserType } from './../types/types'
import { usersAPI } from '../api/usersApi'
import { updateObjectInArray } from '../utils/helpers/objectHelpers'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

const initialState = {
	users: [] as UserType[],
	pageSize: 6,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [] as Array<number> //Array of users ids
}

type InitialState = typeof initialState

const usersReducer = (state = initialState, action: UsersActions): InitialState => {
	switch (action.type) {
		case 'FOLLOW':
			return {
				...state,
				users: updateObjectInArray(state.users, action.payload.userId, 'id', { followed: true })
			}
		case 'UNFOLLOW':
			return {
				...state,
				users: updateObjectInArray(state.users, action.payload.userId, 'id', { followed: false })
			}
		case 'SET_USERS':
			return {
				...state,
				users: [...action.payload.users]
			}
		case 'TOGGLE_IS_FOLLOWING_PROGRESS':
			return {
				...state,
				followingInProgress: action.payload.isFetching
					? [...state.followingInProgress, action.payload.userId]
					: state.followingInProgress.filter((id) => id !== action.payload.userId)
			}
		case 'SET_CURRENT_PAGE':
		case 'SET_TOTAL_USERS_COUNT':
		case 'TOGGLE_IS_FETCHING':
			return {
				...state,
				...action.payload
			}
		default:
			return state
	}
}

export type UsersActions = InferActionsTypes<typeof usersActions>
export const usersActions = {
	followSuccess: (userId: number) => ({ type: 'FOLLOW', payload: { userId } } as const),
	unfollowSuccess: (userId: number) => ({ type: 'UNFOLLOW', payload: { userId } } as const),
	setUsers: (users: UserType[]) => ({ type: 'SET_USERS', payload: { users } } as const),
	setTotalUsersCount: (totalUsersCount: number) =>
		({ type: 'SET_TOTAL_USERS_COUNT', payload: { totalUsersCount } } as const),
	toggleFetching: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', payload: { isFetching } } as const),
	toggleFollowingProgress: (isFetching: boolean, userId: number) =>
		({
			type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
			payload: { isFetching, userId }
		} as const),
	setCurrentPage: (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', payload: { currentPage } } as const)
}

type CurrentDispatch = Dispatch<UsersActions>
type ThunkType = ThunkAction<Promise<void>, AppState, unknown, UsersActions>

export const requestUsers =
	(page: number, pageSize: number): ThunkType =>
	async (dispatch, getState) => {
		dispatch(usersActions.toggleFetching(true))
		try {
			const response = await usersAPI.getUsers(page, pageSize)
			const data = response.data
			dispatch(usersActions.toggleFetching(false))
			dispatch(usersActions.setUsers(data.items))
			dispatch(usersActions.setTotalUsersCount(data.totalCount))
		} catch (e) {
			const error = (e as Error).message
			console.error('Ошибка получения пользователей', error)
		}
	}

const _followunfollowFlow = async (
	dispatch: CurrentDispatch,
	userId: number,
	apiMethod: any,
	actionCreator: (userId: number) => UsersActions
) => {
	dispatch(usersActions.toggleFollowingProgress(true, userId))
	try {
		const response = await apiMethod(userId)
		const data = response.data
		if (data.resultCode === ResultCodes.Success) {
			dispatch(actionCreator(userId))
		}
	} catch (e) {
		const error = (e as Error).message
		console.error('Ошибка подписки', error)
	}
	dispatch(usersActions.toggleFollowingProgress(false, userId))
}

export const follow =
	(userId: number): ThunkType =>
	async (dispatch) => {
		_followunfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), usersActions.followSuccess)
	}

export const unfollow =
	(userId: number): ThunkType =>
	async (dispatch) => {
		_followunfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), usersActions.unfollowSuccess)
	}

export default usersReducer
