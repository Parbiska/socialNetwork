import { useState, useEffect } from 'react';
import styles from './ProfileStatus.module.css';
import { ChangeEvent } from 'react'

interface Props {
    status: string
    updateStatus: (newStatus: string) => void
    isAuthUserProfile: boolean
}

const ProfileStatus: React.FC<Props> = ({ status, updateStatus, isAuthUserProfile }) => {

    const [ editMode, setEditMode ] = useState(false);
    const [ localStatus, setLocalStatus ] = useState(status);

    useEffect( () => {
        setLocalStatus(status);
    }, [status] );

    const activateEditMode = () => isAuthUserProfile ? setEditMode(true) : null;

    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(localStatus);
    }



    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => setLocalStatus(e.currentTarget.value);

    return (
        <div className={styles.status}>
            {editMode ?
                <input value={localStatus} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}/>
                :
                <span onDoubleClick={activateEditMode}>{status || '------'}</span>
            }
        </div>
    )
};

export default ProfileStatus;