import { UserType } from './../types/types'
import axios from 'axios'

export const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '71ae5471-7b1e-41d2-b9a9-2a6abf27e06a'
	}
})

export enum ResultCodes {
	Success = 0,
	Error = 1
}

export enum ResultCodeForCaptcha {
	Success = 0,
	Error = 1,
	CaptchaIsRequired = 10
}

export type GetItems = {
	items: UserType[]
	totalCount: number
	error: string | null
}
