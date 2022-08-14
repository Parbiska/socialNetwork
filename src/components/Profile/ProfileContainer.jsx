import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile } from './../../redux/profileReducer';
import { WithAuthRedirect } from './../../hoc/WithAuthRedirect';
import { withRouter } from '../../hoc/WithRouter';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    userId;
    componentDidMount = () => {
        this.userId = this.props.match.params.userId || this.props.authUserId;
        if (!!this.userId) {
            this.props.getProfile(this.userId);
        } 
    }

    render() {
        return <Profile isAuthUserProfile={this.userId === this.props.authUserId} {...this.props}></Profile>
    }
};

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
    authUserId: state.auth.id
});

export default compose(connect(mapStateToProps, { getProfile }), withRouter, WithAuthRedirect)(ProfileContainer);