import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = props => {
    return (
    <div className={styles.profile}>
        <ProfileInfo profile={props.profile}></ProfileInfo>
        {props.isAuthUserProfile ? <MyPostsContainer></MyPostsContainer> : null}
    </div>
);
};

export default Profile;