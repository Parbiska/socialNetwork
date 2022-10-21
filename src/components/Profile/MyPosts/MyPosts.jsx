import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { formField } from '../../common/FormsControls/FormsControls';
import React from 'react';

const maxLength50 = maxLengthCreator(50);

const PostForm = props => {

	return (
		<form onSubmit={props.handleSubmit} className={styles.posts__new}>
			<Field validate={[required, maxLength50]} element='textarea' component={formField} name='postText' placeholder="your news..." className={styles.posts__area}></Field>
			{/* <button type='reset' className={`${styles.posts__button} ${styles.posts__button_reset}`}>Reset</button> */}
			<button className={styles.posts__button}>Publish</button>
		</form>
	)
};

const PostReduxForm = reduxForm({ form: 'newPost' })(PostForm);

const MyPosts = React.memo(props => {
	const onSubmit = formData => {
		props.addPost(formData.postText);
	}

	const posts = props.state.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}></Post>).reverse();

	return (
		<div className={styles.posts}>
			<h2>My posts</h2>
			<PostReduxForm onSubmit={onSubmit}></PostReduxForm>
			{posts}
		</div>
	);
});

export default MyPosts;