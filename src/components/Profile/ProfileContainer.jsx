import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus } from './../../redux/profileReducer';
import { compose } from 'redux';
import { withRouter } from '../../hoc/WithRouter';


class ProfileContainer extends React.Component {

    state = {
        userId: undefined
    }

    componentDidMount = () => {
        const userId = this.props.match.params.userId || this.props.authUserId;


        if (!!userId) {
            this.props.getProfile(userId);
            this.props.getStatus(userId);
            this.setState({userId});
        } 
    }

    render() {
        return <Profile status={this.props.status} updateStatus={this.props.updateStatus} isAuthUserProfile={this.state.userId === this.props.authUserId} {...this.props}></Profile>
    }
};

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.id,
    isAuth: state.auth.isAuth
});

export default compose( withRouter, connect(mapStateToProps, { getProfile, getStatus, updateStatus }))(ProfileContainer);