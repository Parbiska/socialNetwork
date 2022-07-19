import styles from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {

    const posts = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}></Post>);


    return (
        <div className={styles.posts}>
            <h2>My posts</h2>
            <form className={styles.posts__new}>
                <textarea placeholder="your news..." className={styles.posts__area}></textarea>
                <button className={`${styles.posts__button} ${styles.posts__button_reset}`} type="reset">Reset</button>
                <button className={styles.posts__button}>Publish</button>
            </form>
            {posts}
        </div>
    )
};

export default MyPosts;