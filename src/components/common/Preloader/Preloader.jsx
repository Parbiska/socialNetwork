import styles from './Preloader.module.css'

const Preloader = props => (
    <div className={styles.wrapper}>
        <img className={styles.preloader} src={props.src} alt='Loading...'/>
    </div>
);

export default Preloader;