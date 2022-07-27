import MyPosts from './MyPosts';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ state: state.profilePage });

const mapDispatchToProps = dispatch => {
    return {
        updateNewPostText: text => {
            return dispatch(updateNewPostTextAC(text));
        },
        addPost: () => {
            return dispatch(addPostAC());
        },
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;