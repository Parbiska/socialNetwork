import styles from './LoginForm.module.css';
import { createField, Input } from '../../common/FormsControls/FormsControls';
import { required } from '../../../utils/validators/validators';

const LoginForm = ({ handleSubmit, error, captchaUrl }) => (
    <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.login}>
            {createField('Login', 'email', [required], Input, { className: styles.input })}
        </div>
        <div className={styles.password}>
            {createField('Password', 'password', [required], Input, { className: styles.input, type: 'password' })}
        </div>
        <div className={styles.remember}>
            {createField('', 'rememberMe', [], Input, { className: styles.input, type: 'checkbox' })} Remember me
        </div>
        {error &&
            <div className={styles.summaryError}>
                {error}
            </div>
        }

        {captchaUrl &&
            <div>
                <img alt='error' src={captchaUrl} />
                <div>
                    {createField('symbols from image', 'captcha', [required], Input, { className: styles.input })}
                </div>
            </div>
        }
        <div className={styles.button}>
            <button className={styles.btn}>Login</button>
        </div>
    </form>
);

export default LoginForm;