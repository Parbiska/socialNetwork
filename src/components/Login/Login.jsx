import { Field, reduxForm } from 'redux-form';
import styles from './Login.module.css';
import { formField } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';

const LoginForm = props => (
    <form onSubmit={props.handleSubmit} className={styles.form}>
        <div className={styles.login}>
            <Field element='input' validate={[required ]} name='login' component={formField} className={styles.input} placeholder='Login' />
        </div>
        <div className={styles.password}>
            <Field element='input' validate={[required ]} name='password' component={formField} className={styles.input} placeholder='Password' />
        </div>
        <div className={styles.remember}>
            <Field name='rememberMe' component='input' type='checkbox' /> Remember me
        </div>
        <div className={styles.button}>
            <button className={styles.btn}>Login</button>
        </div>
    </form>
);

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = props => {
    const onSubmit = formData => {
        console.log(formData);
    }

    return (
        <div className={styles.login}>
            <h1 className={styles.title}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}></LoginReduxForm>
        </div>
    )
};

export default Login;