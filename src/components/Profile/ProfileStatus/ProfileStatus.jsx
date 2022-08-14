import styles from './ProfileStatus.module.css';

const ProfileStatus = props => {
    return (
        <div className={styles.status}>
            <div>
                {props.status}
            </div>
            <div>
                <input></input>
            </div>
        </div>
    )
}; 

export default ProfileStatus;