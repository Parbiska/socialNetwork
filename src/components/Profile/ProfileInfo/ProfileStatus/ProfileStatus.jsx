import React from 'react';
import styles from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}

	deactivateEditMode = () => {
		this.setState({
			editMode: false
		})
        this.props.updateStatus(this.state.status)
	}

    componentDidUpdate = (prevProps, prevState) => {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render = () => {
        return (
            <div className={styles.status}>
                {this.state.editMode ?
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivateEditMode} value={this.state.status} />
                    :
                    <span onDoubleClick={this.props.isAuthUserProfile ? this.activateEditMode : null}>{this.props.status || 'None' }</span>
                }
            </div>
        )
    }
};

export default ProfileStatus;