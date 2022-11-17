import { createField, Input, Textarea } from '../../../common/FormsControls/FormsControls';
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import styles from './ProfileDataForm.module.css';
import { reduxForm } from 'redux-form';
import { maxLengthCreator } from '../../../../utils/validators/validators';

const maxLength80 = maxLengthCreator(80);

const ProfileDataForm = ({ handleSubmit, isAuthUserProfile, updateStatus, status, profile, error }) => {

    const contacts = [];
    for (const key in profile.contacts) {
        contacts.push(<div key={key} className={styles.contact}>{`${key}: `}  {createField(key, `contacts.${key}`, [], Input, {className: styles.input})}</div>);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.wrapper}>
            <div className={styles.info__name}>
                <span className={styles.text_bold}>Full Name: </span> 
                {createField('Full name', 'fullName', [], Input, {className: styles.input})}
            </div>

            <div>
                <span className={styles.text_bold}>Status: </span>
                <ProfileStatus isAuthUserProfile={isAuthUserProfile} updateStatus={updateStatus} status={status}></ProfileStatus>
            </div>

            <div>
                <span className={styles.text_bold}>About me:</span> 
                <div>{createField('About Me', 'aboutMe', [maxLength80,], Textarea, {className: styles.textarea})}</div>
            </div>

            <div>
                <span className={styles.text_bold}>Looking for a job:</span>
                {createField('', 'lookingForAJob', [], Input, {className: styles.input_checkbox, type: 'checkbox'})}
            </div>

            <div>
                <span className={styles.text_bold}>My professional skills: </span>
                <div>{createField('My professional skills', 'lookingForAJobDescription', [maxLength80,], Textarea, {className: styles.textarea})}</div>
            </div>

            <div>
                <span className={styles.text_bold}>Contacts:</span>
                <div className={styles.contacts}>
                    { contacts }
                </div>
            </div>
            
            {error && 
                <div className={styles.summaryError}>
                    {error}
                </div>
            }

            <div>
                <button className={styles.btn}>Save</button>
            </div>
        </form>
    );
}

export default reduxForm({form: 'edit-profile'})(ProfileDataForm);