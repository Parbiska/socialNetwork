import Header from './Header';
import { connect } from 'react-redux';
import { auth, logout  } from './../../redux/authReducer';

const HeaderContainer = props => {
        return (
            <Header {...props}></Header>
        )
};

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    userName: state.auth.login,
    img: state.auth.img,
    id: state.auth.id
});


export default connect(mapStateToProps, { auth, logout })(HeaderContainer);