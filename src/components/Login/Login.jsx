import styles from './Login.module.css';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import LoginForm from './LoginForm/LoginForm';
import { Navigate } from 'react-router-dom';

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = formData => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Navigate to="/profile"></Navigate>
    }

    return (
        <div className={styles.login}>
            <h1 className={styles.title}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}></LoginReduxForm>
        </div>
    )
};

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);