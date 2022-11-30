import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import userPhoto from '../../../assets/images/avatar.png';
import Contact from './Contact/Contact';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';


const ProfileData = props => {
    const contacts = [];
    for (const key in props.profile.contacts) {
        const value = props.profile.contacts[key];
        if (!!value) {
            contacts.push(<Contact key={key} contactTitle={key} contactValue={value}></Contact>)
        }
    }

    return (
        <div className={styles.info__descr}>
            <div className={styles.info__name}>{props.profile.fullName}</div>
            
            <div className={styles.info__status}>
                <span className={styles.text_bold}>Status:</span> <ProfileStatus isAuthUserProfile={props.isAuthUserProfile} updateStatus={props.updateStatus} status={props.status}></ProfileStatus>
            </div>

            {!props.profile.aboutMe ? null : <div>
                <span className={styles.text_bold}>About me:</span> {props.profile.aboutMe}
            </div>}

            <div>
                <span className={styles.text_bold}>Looking for a job:</span> {!!props.profile.lookingForAJob ? 'yes' : 'no'}
            </div>

            {!!props.profile.lookingForAJobDescription && <div><span className={styles.text_bold}>My professional skills: </span>{props.profile.lookingForAJobDescription}</div>}

            {!!contacts.length && <div>
                <span className={styles.text_bold}>Contacts:</span>
                <ul className={styles.contacts}>
                    {contacts}
                </ul>
            </div>}

            {props.isAuthUserProfile && <div>
                <button onClick={() => props.setEditMode(true)} className={styles.btn}>Edit</button>
            </div>}
        </div>
    );
}

const ProfileInfo = ({ profile, isAuthUserProfile, updateStatus, status, savePhoto, saveProfile, editMode, setEditMode }) => {

    if (!profile) {
        return (
            <div className={styles.preloader}>
                <Preloader></Preloader>
            </div>
        );
    }


    const onPhotoSelected = e => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = formData => {
            saveProfile(formData);
    }

    return (
        <div className={styles.info}>
            <img className={styles.info__wallpaper} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt='user' />
            <div className={styles.info__wrapper}>
                <div className={styles.img__wrapper}>
                    <img id='file-upload' src={profile.photos.large || userPhoto} alt="avatar" className={styles.info__avatar} />
                    {isAuthUserProfile && <label className={styles.img__uploader}>
                        Upload img
                        <input onChange={onPhotoSelected} type='file' />
                    </label>}
                </div>
                {editMode 
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} isAuthUserProfile={isAuthUserProfile} updateStatus={updateStatus} status={status}></ProfileDataForm>
                    : <ProfileData setEditMode={setEditMode} profile={profile} isAuthUserProfile={isAuthUserProfile} updateStatus={updateStatus} status={status}></ProfileData>
                }
            </div>
        </div>
    );
};

export default ProfileInfo;