import MyPosts from './MyPosts';
import { addPost, updateNewPostText } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ state: state.profilePage });

const MyPostsContainer = connect(mapStateToProps, {
    updateNewPostText,
    addPost
})(MyPosts);

export default MyPostsContainer;