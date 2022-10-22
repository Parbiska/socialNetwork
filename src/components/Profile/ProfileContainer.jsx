import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus } from './../../redux/profileReducer';
import { compose } from 'redux';
import { withRouter } from '../../hoc/WithRouter';
import { useEffect, useState } from 'react';

const ProfileContainer = props => {

    const [userId, setUserId] = useState(undefined);

    const { getStatus, getProfile } = { ...props};

    useEffect(() => {
        setUserId(props.match.params.userId || props.authUserId);
        if (!!userId) {
            getProfile(userId);
            getStatus(userId);
        } 
    }, [ userId, props.match.params.userId, props.authUserId, getStatus, getProfile ]);

    return <Profile status={props.status} updateStatus={props.updateStatus} isAuthUserProfile={userId === props.authUserId} {...props}></Profile>
};

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.id,
    isAuth: state.auth.isAuth
});

export default compose( withRouter, connect(mapStateToProps, { getProfile, getStatus, updateStatus }))(ProfileContainer);