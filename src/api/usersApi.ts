import { GetItems, instance } from './api'

export const usersAPI = {
	getUsers(currentPage: number, pageSize: number) {
		return instance.get<GetItems>(`users?page=${currentPage}&count=${pageSize}`)
	},
	follow(userId: number) {
		return instance.post(`follow/${userId}`)
	},

	unfollow(userId: number) {
		return instance.delete(`follow/${userId}`)
	}
}
