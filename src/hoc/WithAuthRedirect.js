import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToPropsRedirect = state => ({
    isAuth: state.auth.isAuth
});

export const WithAuthRedirect = Component => {
    class RedirectComponent extends React.Component {
        render() { 
            if (!this.props.isAuth) return <Navigate to='/login'></Navigate>;
            
            return <Component {...this.props}/>
        }
    }

    const ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
};