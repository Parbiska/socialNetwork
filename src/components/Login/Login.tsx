import styles from './Login.module.css'
import { connect } from 'react-redux'
import { login } from '../../redux/authReducer'
import LoginReduxForm from './LoginForm/LoginForm'
import { Navigate } from 'react-router-dom'
import { AppState } from '../../redux/store'

export type LoginFormData = {
	email: string
	password: string
	rememberMe: boolean
	captcha: string | null
}

const Login: React.FC<MapStateToProps & MapDispatchToProps> = ({ isAuth, captchaUrl, login }) => {
	const onSubmit = (formData: LoginFormData): void => {
		login(formData.email, formData.password, formData.rememberMe, formData.captcha)
	}

	if (isAuth) {
		return <Navigate to="/profile"></Navigate>
	}

	return (
		<div className={styles.login}>
			<h1 className={styles.title}>Login</h1>
			<LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit}></LoginReduxForm>
		</div>
	)
}

type MapStateToProps = {
	isAuth: boolean
	captchaUrl: string | null
}

type MapDispatchToProps = {
	login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
}

const mapStateToProps = (state: AppState): MapStateToProps => ({
	isAuth: state.auth.isAuth,
	captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login })(Login)
