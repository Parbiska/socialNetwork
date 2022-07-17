import styles from './Header.module.css';

const Header = () => (
    <header className={styles.header}>
      <img className={styles.header__img} src="logo192.png" alt="logo" />
    </header>
    );

export default Header;