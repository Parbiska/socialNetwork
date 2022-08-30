import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus } from './../../redux/profileReducer';
import { WithAuthRedirect } from './../../hoc/WithAuthRedirect';
import { withRouter } from '../../hoc/WithRouter';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    userId;
    componentDidMount = () => {
        this.userId = this.props.match.params.userId || this.props.authUserId;
        if (!!this.userId) {
            this.props.getProfile(this.userId);
            this.props.getStatus(this.userId);
        } 
    }

    render() {
        return <Profile status={this.props.status} updateStatus={this.props.updateStatus} isAuthUserProfile={this.userId === this.props.authUserId} {...this.props}></Profile>
    }
};

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.id
});

export default compose(connect(mapStateToProps, { getProfile, getStatus, updateStatus }), withRouter, WithAuthRedirect)(ProfileContainer);