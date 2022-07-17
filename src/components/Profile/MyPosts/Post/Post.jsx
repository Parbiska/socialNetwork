import styles from './Post.module.css';

const Post = (props) => (
    <div className={styles.post}>{props.message}</div>
);

export default Post;