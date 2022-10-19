import styles from './LoginForm.module.css';
import { Field } from 'redux-form';
import { formField } from '../../common/FormsControls/FormsControls';
import { required } from '../../../utils/validators/validators';

const LoginForm = props => (
    <form onSubmit={props.handleSubmit} className={styles.form}>
        <div className={styles.login}>
            <Field element='input' validate={[required ]} name='email' component={formField} className={styles.input} placeholder='Login' />
        </div>
        <div className={styles.password}>
            <Field element='input' validate={[required ]} type='password' name='password' component={formField} className={styles.input} placeholder='Password' />
        </div>
        <div className={styles.remember}>
            <Field name='rememberMe' component='input' type='checkbox' /> Remember me
        </div>
        {props.error && 
            <div className={styles.summaryError}>
                {props.error}
            </div>
        }
        <div className={styles.button}>
            <button className={styles.btn}>Login</button>
        </div>
    </form>
);

export default LoginForm;