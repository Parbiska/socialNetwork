import Header from './Header';
import { connect } from 'react-redux';
import { logout  } from '../../redux/authReducer';
import { AppState } from '../../redux/store';

const mapStateToProps = (state: AppState) => ({
    isAuth: state.auth.isAuth,
    avatar: state.auth.imgUrl
});


export default connect(mapStateToProps, { logout })(Header);