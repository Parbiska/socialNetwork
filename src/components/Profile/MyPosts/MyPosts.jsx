import styles from './MyPosts.module.css';
import Post from './Post/Post'

const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fuga nulla ducimus quam delectus optio sunt non cupiditate, tempore iure autem in sapiente quisquam neque eius amet error. Corporis, praesentium?';

const MyPosts = () => (
    <div className={styles.posts}>
        <h2>My posts</h2>
        <form className={styles.posts__new}>
            <textarea placeholder="your news..." className={styles.posts__area}></textarea>
            <button className={`${styles.posts__button} ${styles.posts__button_reset}`} type="reset">Reset</button>
            <button className={styles.posts__button}>Send</button>
        </form>
        <Post message={lorem}></Post>
        <Post message={lorem}></Post>
    </div>
);

export default MyPosts;