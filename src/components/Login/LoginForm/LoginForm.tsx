import styles from './LoginForm.module.css'
import { createField, Input } from '../../common/FormsControls/FormsControls'
import { required } from '../../../utils/validators/validators'
import { InjectedFormProps } from 'redux-form'
import { LoginFormData } from '../Login'
import { reduxForm } from 'redux-form'

type LoginFormOwnProps = {
	captchaUrl: string | null
}

type LoginFormProperties = Extract<keyof LoginFormData, string>

const LoginForm: React.FC<InjectedFormProps<LoginFormData, LoginFormOwnProps> & LoginFormOwnProps> = ({
	handleSubmit,
	error,
	captchaUrl
}) => (
	<form onSubmit={handleSubmit} className={styles.form}>
		<div className={styles.login}>
			{createField<LoginFormProperties>('Email', 'email', [required], Input, {
				className: styles.input
			})}
		</div>
		<div className={styles.password}>
			{createField<LoginFormProperties>('Password', 'password', [required], Input, {
				className: styles.input,
				type: 'password'
			})}
		</div>
		<div className={styles.remember}>
			{createField<LoginFormProperties>('', 'rememberMe', [], Input, {
				className: styles.input,
				type: 'checkbox'
			})}{' '}
			Remember me
		</div>
		{error && <div className={styles.summaryError}>{error}</div>}

		{captchaUrl && (
			<div>
				<img alt="error" src={captchaUrl} />
				<div>
					{createField<LoginFormProperties>('symbols from image', 'captcha', [required], Input, {
						className: styles.input
					})}
				</div>
			</div>
		)}
		<div className={styles.button}>
			<button className={styles.btn}>Login</button>
		</div>
	</form>
)

const LoginReduxForm = reduxForm<LoginFormData, LoginFormOwnProps>({
	form: 'login'
})(LoginForm)

export default LoginReduxForm
