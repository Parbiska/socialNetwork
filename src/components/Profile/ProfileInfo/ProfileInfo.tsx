import styles from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus/ProfileStatus'
import userPhoto from '../../../assets/images/avatar.png'
import Contact from './Contact/Contact'
import ProfileReduxForm from './ProfileDataForm/ProfileDataForm'
import { ProfileType } from '../../../types/types'

type ProfileDataProps = {
	profile: ProfileType
	status: string
	updateStatus: (newStatus: string) => void
	isAuthUserProfile: boolean
	setEditMode: (boolean: boolean) => void
}

const ProfileData: React.FC<ProfileDataProps> = ({ profile, isAuthUserProfile, updateStatus, status, setEditMode }) => {
	const contacts = []

	for (const key in profile.contacts) {
		const value = profile.contacts[key as keyof typeof profile.contacts]
		if (!!value) {
			contacts.push(<Contact key={key} contactTitle={key} contactValue={value}></Contact>)
		}
	}

	return (
		<div className={styles.info__descr}>
			<div className={styles.info__name}>{profile.fullName}</div>

			<div className={styles.info__status}>
				<span className={styles.text_bold}>Status:</span>{' '}
				<ProfileStatus
					isAuthUserProfile={isAuthUserProfile}
					updateStatus={updateStatus}
					status={status}
				></ProfileStatus>
			</div>

			{!profile.aboutMe ? null : (
				<div>
					<span className={styles.text_bold}>About me:</span> {profile.aboutMe}
				</div>
			)}

			<div>
				<span className={styles.text_bold}>Looking for a job:</span> {!!profile.lookingForAJob ? 'yes' : 'no'}
			</div>

			{!!profile.lookingForAJobDescription && (
				<div>
					<span className={styles.text_bold}>My professional skills: </span>
					{profile.lookingForAJobDescription}
				</div>
			)}

			{!!contacts.length && (
				<div>
					<span className={styles.text_bold}>Contacts:</span>
					<ul className={styles.contacts}>{contacts}</ul>
				</div>
			)}

			{isAuthUserProfile && (
				<div>
					<button onClick={() => setEditMode(true)} className={styles.btn}>
						Edit
					</button>
				</div>
			)}
		</div>
	)
}

interface ProfileInfoProps {
	profile: ProfileType
	isAuthUserProfile: boolean
	isEditMode: boolean
	status: string
	updateStatus: (newStatus: string) => void
	setEditMode: (boolean: boolean) => void
	savePhoto: (e: any) => void
	saveProfile: (newProfileData: any) => void
}

type saveProfileFormData = {}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
	profile,
	isAuthUserProfile,
	updateStatus,
	status,
	savePhoto,
	saveProfile,
	isEditMode,
	setEditMode
}) => {
	if (!profile) {
		return (
			<div className={styles.preloader}>
				<Preloader></Preloader>
			</div>
		)
	}

	const onPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!!e.target.files) {
			if (e.target.files.length) {
				savePhoto(e.target.files[0])
			}
		}
	}

	const onSubmit = (formData: saveProfileFormData) => {
		saveProfile(formData)
	}

	return (
		<div className={styles.info}>
			<img
				className={styles.info__wallpaper}
				src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
				alt="user"
			/>
			<div className={styles.info__wrapper}>
				<div className={styles.img__wrapper}>
					<img
						id="file-upload"
						src={profile.photos.large || userPhoto}
						alt="avatar"
						className={styles.info__avatar}
					/>
					{isAuthUserProfile && (
						<label className={styles.img__uploader}>
							Upload img
							<input onChange={onPhotoSelected} type="file" />
						</label>
					)}
				</div>
				{isEditMode ? (
					<ProfileReduxForm
						profile={profile}
						onSubmit={onSubmit}
						isAuthUserProfile={isAuthUserProfile}
						updateStatus={updateStatus}
						status={status}
						error={''}
						initialValues={profile}
					></ProfileReduxForm>
				) : (
					<ProfileData
						setEditMode={setEditMode}
						profile={profile}
						isAuthUserProfile={isAuthUserProfile}
						updateStatus={updateStatus}
						status={status}
					></ProfileData>
				)}
			</div>
		</div>
	)
}

export default ProfileInfo
