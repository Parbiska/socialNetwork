import { ResultCodes, ResultCodeForCaptcha } from './api'
import { instance } from './api'

type MeResponse = {
	data: {
		id: number
		email: string
		login: string
	}
	resultCode: ResultCodes
	messages: Array<string>
}

type LoginResponse = {
	data: {
		userId: number
	}
	resultCode: ResultCodes | ResultCodeForCaptcha
	messages: Array<string>
}

export const authAPI = {
	me() {
		return instance.get<MeResponse>('auth/me')
	},

	login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
		return instance.post<LoginResponse>(`auth/login`, { email, password, rememberMe, captcha })
	},

	logout() {
		return instance.delete(`auth/login`)
	}
}
