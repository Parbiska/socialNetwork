import styles from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';

const MyPosts = (props) => {

    const posts = props.state.posts.map(p => <Post message={p.message} likesCount={p.likesCount}></Post>).reverse();

    const changeTextarea = (e) => {
        const text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    const resetTextarea = () => {
        props.dispatch(updateNewPostTextActionCreator(''));
    }

    const addNewPost = () => {
        props.dispatch(addPostActionCreator());
    };

    return (
        <div className={styles.posts}>
            <h2>My posts</h2>
            <form className={styles.posts__new}>
                <textarea  onChange={changeTextarea} placeholder="your news..." className={styles.posts__area} value={props.state.newPostText}></textarea>
                <button onClick={resetTextarea} className={`${styles.posts__button} ${styles.posts__button_reset}`} type="reset">Reset</button>
                <button type='button' onClick={addNewPost} className={styles.posts__button}>Publish</button>
            </form>
                {posts}
        </div>
    );
};

export default MyPosts;