import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../redux/authReducer';
import Preloader from '../components/common/Preloader/Preloader';

export const WithAuthRedirect = Component => {
    class RedirectComponent extends React.Component {
        state = {
            isLoaded: false
        }

        componentDidMount = async () => {
           await this.props.auth();
           this.setState({isLoaded: true})
        }

        render() { 
            if (!this.state.isLoaded) return <Preloader></Preloader>;
            if (!this.props.isAuth) return <Navigate to='/login'></Navigate>;
            
            return <Component {...this.props}/>
        }
    }

    const mapStateToPropsRedirect = state => ({
        isAuth: state.auth.isAuth
    });
 
    return connect(mapStateToPropsRedirect, { auth })(RedirectComponent);
};