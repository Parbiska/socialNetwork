import { useState, useEffect } from 'react';
import styles from './ProfileStatus.module.css';

const ProfileStatus = props => {

    const [ editMode, setEditMode ] = useState(false);
    const [ status, setStatus ] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode = () => setEditMode(true);

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = e => setStatus(e.currentTarget.value);

    return (
        <div className={styles.status}>
            {editMode ?
                <input value={status} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}/>
                :
                <span onDoubleClick={props.isAuthUserProfile ? activateEditMode : null}>{props.status || '------'}</span>
            }
        </div>
    )
};

export default ProfileStatus;