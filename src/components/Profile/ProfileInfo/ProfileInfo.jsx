import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from '../ProfileStatus/ProfileStatus';

const ProfileInfo = props => {
    if (!props.profile) {
        return (
            <div className={styles.preloader}>
                <Preloader></Preloader>
            </div>
        );
    }

    const profile = props.profile;
    const contacts = profile.contacts;
    const contactsItems = [];

    const push = (href, text) => contactsItems.push(<li key={text}>
        <a rel="noreferrer" target='_blank' className={styles.contacts__Item} href={href}>{text}</a>
    </li>);

    for (const key in contacts) {
        if (contacts[key] !== null) {
            switch (key) {
                case 'facebook':
                    push(contacts[key], 'Facebook');
                    break;
                case 'website':
                    push(contacts[key], 'Website');
                    break;
                case 'vk':
                    push(contacts[key], 'VK');
                    break;
                case 'twitter':
                    push(contacts[key], 'Twitter');
                    break;
                case 'Instagram':
                    push(contacts[key], 'Instagram');
                    break;
                case 'youtube':
                    push(contacts[key], 'Youtube');
                    break;
                case 'github':
                    push(contacts[key], 'Github');
                    break;
                case 'mainLink':
                    push(contacts[key], 'MainLink');
                    break;
                default:
            }
        }
    }

    return (
        <div className={styles.info}>
            <img className={styles.info__wallpaper} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt='user' />
            <div className={styles.info__wrapper}>
                <img src={profile.photos.large === null ? 'https://www.directivegroup.com/wp-content/uploads/2017/03/smile-9047-9380-hd-wallpapers-1.jpg' : profile.photos.large} alt="avatar" className={styles.info__avatar} />
                <div className={styles.info__descr}>
                    <div className={styles.info__name}>{profile.fullName}</div>
                    Status: <ProfileStatus status={profile.aboutMe}></ProfileStatus>
                    Contacts:
                    <ul className={styles.contacts}>
                        {contactsItems}
                    </ul>
                    {!!profile.lookingForAJob ? 'Looking for a job' : null} <br />
                    {!!profile.lookingForAJobDescription ? profile.lookingForAJobDescription : null}
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;