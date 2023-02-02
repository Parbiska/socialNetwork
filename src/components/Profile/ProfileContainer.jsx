import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus, savePhoto, saveProfile, setEditMode } from './../../redux/profileReducer';
import { compose } from 'redux';
import { withRouter } from '../../hoc/WithRouter';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProfileContainer = ({ getStatus, getProfile, match, authUserId, isAuth, saveProfile, savePhoto, status, updateStatus, ...props }) => {

    const [userId, setUserId] = useState(undefined);


    useEffect(() => {
        setUserId(match.params.userId || authUserId);
        if (!!userId) {
            getProfile(userId);
            getStatus(userId);
        } 
    }, [ userId, match.params.userId, authUserId, getStatus, getProfile ]);

    if (!isAuth && !match.params.userId) return <Navigate to='/login'></Navigate>

    return <Profile saveProfile={saveProfile} savePhoto={savePhoto} status={status} updateStatus={updateStatus} isAuthUserProfile={userId === authUserId} {...props}></Profile>
};

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
    isEditMode: state.profilePage.isEditMode,
    status: state.profilePage.status,
    authUserId: state.auth.id,
    isAuth: state.auth.isAuth
});

export default compose( withRouter, connect(mapStateToProps, { getProfile, getStatus, updateStatus, savePhoto, saveProfile, setEditMode }))(ProfileContainer);