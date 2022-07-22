import styles from './Post.module.css';

const Post = (props) => (
    <div className={styles.post}>
        <img className={styles.img} src="https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-AV00000000000193/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720" alt="user" />
        <div className={styles.text}>
            <div className={styles.name}>Demid</div>
            {props.message}
            <div>Likes: {props.likesCount}</div>
        </div>
    </div>
);

export default Post;