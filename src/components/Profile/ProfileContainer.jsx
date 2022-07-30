import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from './../../redux/profileReducer';
import { useParams } from 'react-router-dom';
import { getProfile } from '../../api/api';

const withRouter = Children => {
    return props => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

class ProfileContainer extends React.Component {
    userId;
    componentDidMount = async () => {
        this.userId = this.props.match.params.userId || this.props.authUserId;
        if (!!this.userId) {
            try {
                const data = await getProfile(this.userId);
                this.props.setUserProfile(data);
            }
            catch (e) {
                console.error(e.message)
            }
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

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));