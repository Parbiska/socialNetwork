import MyPosts from './MyPosts';
import { addPost } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ state: state.profilePage });

export default connect(mapStateToProps, { addPost })(MyPosts);