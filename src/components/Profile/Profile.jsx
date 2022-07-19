import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
    <div className={styles.profile}>
        <ProfileInfo></ProfileInfo>
        <MyPosts posts={props.data.posts}></MyPosts>
    </div>
)
};

export default Profile;