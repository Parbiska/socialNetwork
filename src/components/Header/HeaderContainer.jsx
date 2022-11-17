import Header from './Header';
import { connect } from 'react-redux';
import { auth, logout  } from './../../redux/authReducer';

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    userName: state.auth.login,
    avatar: state.auth.img,
    id: state.auth.id
});


export default connect(mapStateToProps, { auth, logout })(Header);