import styles from './Login.module.css';

const Login = props => {
    return (
        <div className={styles.login}>
            <h1 className={styles.title}>Login</h1>
            <LoginForm></LoginForm>
        </div>
    )
};

const LoginForm = props => (
    <form className={styles.form}>
        <div className={styles.login}>
            <input className={styles.input} placeholder='Login' />
        </div>
        <div className={styles.password}>
            <input className={styles.input} placeholder='Password' />
        </div>
        <div className={styles.remember}>
            <input type='checkbox' /> Remember me
        </div>
        <div className={styles.button}>
            <button className={styles.btn}>Login</button>
        </div>
    </form>
)

export default Login;