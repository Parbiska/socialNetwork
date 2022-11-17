import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { createField, Textarea } from '../../common/FormsControls/FormsControls';
import React from 'react';
import Preloader from '../../common/Preloader/Preloader';

const maxLength50 = maxLengthCreator(50);

const PostForm = props => {

	return (
		<form onSubmit={props.handleSubmit} className={styles.posts__new}>
			{ createField('your news...', 'postText', [required, maxLength50], Textarea, { className: styles.posts__area }) }
			{/* <button type='reset' className={`${styles.posts__button} ${styles.posts__button_reset}`}>Reset</button> */}
			<button className={styles.posts__button}>Publish</button>
		</form>
	)
};

const PostReduxForm = reduxForm({ form: 'newPost' })(PostForm);

const MyPosts = React.memo(({state, addPost}) => {
	const onSubmit = formData => {
		addPost(formData.postText);
	}

	if (!state.profile) return <Preloader></Preloader>

	const posts = state.posts.map(p => <Post name={state.profile.fullName} key={p.id} message={p.message} likesCount={p.likesCount} photo={!state.profile ? null : state.profile.photos.large }></Post>).reverse();

	return (
		<div className={styles.posts}>
			<h2>My posts</h2>
			<PostReduxForm onSubmit={onSubmit}></PostReduxForm>
			{posts}
		</div>
	);
});

export default MyPosts;