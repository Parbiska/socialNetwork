import styles from './Preloader.module.css'
import preloader from '../../../assets/images/preloader.svg'

const Preloader = () => (
    <img className={styles.preloader} src={preloader} alt='Loading...'/>
);

export default Preloader;