import { connect } from 'react-redux'
import { follow, unfollow, requestUsers, usersActions } from '../../redux/usersReducer'
import Users from './Users'
import {
	getUsers,
	getPageSize,
	getTotalUsersCount,
	getCurrnetPage,
	getIsFetching,
	getFollowingInProgress
} from '../../redux/usersSelectors'
import { useEffect } from 'react'
import { UserType } from '../../types/types'
import { AppState } from '../../redux/store'

type MapStatePropsType = {
	isFetching: boolean
	pageSize: number
	totalUsersCount: number
	currentPage: number
	users: UserType[]
	followingInProgress: number[]
}

type MapDispatchPropsType = {
	requestUsers: (currentNumber: number, pageSize: number) => void
	setCurrentPage: (currentNumber: number) => void
	follow: (userId: number) => void
	unfollow: (userId: number) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const UsersContainer: React.FC<PropsType> = ({
	users,
	followingInProgress,
	follow,
	unfollow,
	isFetching,
	pageSize,
	totalUsersCount,
	currentPage,
	requestUsers,
	setCurrentPage
}) => {
	useEffect(() => {
		requestUsers(currentPage, pageSize)
	}, [currentPage, pageSize, requestUsers])

	const onPageChanged = (pageNumber: number) => {
		setCurrentPage(pageNumber)
		requestUsers(pageNumber, pageSize)
	}

	return (
		<Users
			isFetching={isFetching}
			followingInProgress={followingInProgress}
			onPageChanged={onPageChanged}
			users={users}
			follow={follow}
			unfollow={unfollow}
			totalUsersCount={totalUsersCount}
			pageSize={pageSize}
			currentPage={currentPage}
		/>
	)
}

const mapStateToProps = (s: AppState): MapStatePropsType => ({
	users: getUsers(s),
	pageSize: getPageSize(s),
	totalUsersCount: getTotalUsersCount(s),
	currentPage: getCurrnetPage(s),
	isFetching: getIsFetching(s),
	followingInProgress: getFollowingInProgress(s)
})

const setCurrentPage = usersActions.setCurrentPage

type OwnPropsType = {}
export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppState>(mapStateToProps, {
	follow,
	unfollow,
	requestUsers,
	setCurrentPage
})(UsersContainer)
