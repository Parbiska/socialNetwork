import styles from './Post.module.css';
import userPhoto from '../../../../assets/images/avatar.png';

const Post = ({ photo, likesCount, message, name }) => (
    <div className={styles.post}>
        <img className={styles.img} src={photo || userPhoto} alt="user" />
        <div className={styles.text}>
            <div className={styles.name}>{name}</div>
            {message}
            <div>Likes: {likesCount}</div>
        </div>
    </div>
);

export default Post;