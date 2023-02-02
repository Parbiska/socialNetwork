import User from './User/User';
import s from './Users.module.css';
import Preloader from '../common/Preloader/Preloader';
import { Paginator } from '../common/Paginator/Paginator';
import { UserType } from '../../types/types';

type PropsType = {
    users: UserType[]
    followingInProgress: number[]
    isFetching: boolean
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    onPageChanged: (int: number) => void
}

const Users: React.FC<PropsType> = ({ users, followingInProgress, follow, unfollow, isFetching, onPageChanged, pageSize, totalUsersCount, currentPage }) => {
    const loadUsers = users.map(u => <User followingInProgress={followingInProgress} key={u.id} follow={follow} unfollow={unfollow} photos={u.photos} id={u.id} followed={u.followed} name={u.name} status={u.status} location={u.location}></User>); 
    
    return (
        <div className={s.users}>
            <h1>Users</h1>
            
            <Paginator pageSize={pageSize} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} currentPage={currentPage}></Paginator>

            { isFetching ? <div className={s.preloader}><Preloader></Preloader></div> : loadUsers }
        </div>
    )
}

export default Users;