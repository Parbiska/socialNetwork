import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { toggleIsFetching, setAuthUserData, setUserImg } from './../../redux/authReducer';
import { authMe, getProfile } from './../../api/api';

class HeaderContainer extends React.Component {

    componentDidMount = async () => {
        this.props.toggleIsFetching(true);
        try {
            const data = await authMe();
            if (data.resultCode === 0) {
                this.props.toggleIsFetching(false);
                const { id, email, login } = data.data;
                this.props.setAuthUserData(id, email, login);
                try {  
                    const data = await getProfile(id);    
                    this.props.setUserImg(data.photos.small);
                }
                catch(e) {
                    console.error('Ошибка получения аватара', e.message)
                }
            }
        }
        catch(e) {
            console.error('Ошибка в авторизации', e.message)
        }
    }

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
});

export default connect(mapStateToProps, {
    setAuthUserData,
    toggleIsFetching,
    setUserImg
})(HeaderContainer);