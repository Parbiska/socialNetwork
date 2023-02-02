import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = props => {
    return (
    <div className={styles.profile}>
        <ProfileInfo isEditMode={props.isEditMode} setEditMode={props.setEditMode} saveProfile={props.saveProfile} isAuthUserProfile={props.isAuthUserProfile} status={props.status} updateStatus={props.updateStatus} profile={props.profile} savePhoto={props.savePhoto}></ProfileInfo>
        {props.isAuthUserProfile ? <MyPostsContainer/> : null}
    </div>
);
};

export default Profile;