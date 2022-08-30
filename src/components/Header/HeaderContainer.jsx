import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { auth } from './../../redux/authReducer';

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props}></Header>
        )
    }
};

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    img: state.auth.img,
    id: state.auth.id
});


export default connect(mapStateToProps, { auth })(HeaderContainer);