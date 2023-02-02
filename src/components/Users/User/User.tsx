import styles from './User.module.css'
import { NavLink } from 'react-router-dom'
import { UserType } from '../../../types/types'
import userAvatar from '../../../assets/images/avatar.png' 

type UserProps = UserType & {
    follow: (id: number) => void
    unfollow: (id: number) => void
    followingInProgress: number[]
}

const User: React.FC<UserProps> = ({ follow, unfollow, photos, id: userId, location, followed, followingInProgress, status, name }) => {
    const followFn = () => {
        follow(userId)
        
    }
    const unfollowFn = () => {
        unfollow(userId)
    }
    

    return (
        <div className={styles.user}>
            <div className={styles.ava}>
                <NavLink to={`/profile/${userId}`}>
                    <img className={styles.img} src={photos.small || userAvatar} alt='User' />
                </NavLink>
                {followed ? 
                <button disabled={followingInProgress.some(id => id === userId)} onClick={unfollowFn} className={styles.btn}>Unfollow</button> : 
                <button disabled={followingInProgress.some(id => id === userId)} onClick={followFn} className={styles.btn}>Follow</button>}
            </div>
            <div className={styles.info}>
                <div className={styles.descr}>
                    <div className={styles.name}>{name}</div>
                    {!!status ? status : 'No status:('}
                </div>
                {/* <div className={styles.location}>
                    {location.city},
                    City,
                    <br />
                    {location.country}
                    Country
                </div> */}

            </div>
        </div>
    );
};

export default User;