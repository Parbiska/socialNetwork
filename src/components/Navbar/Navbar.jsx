import styles from './Navbar.module.css';

const Navbar = () => (
    <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <a href="#">Profile</a>
            </li>
          <li className={styles.nav__item}>
            <a href="#">Messages</a>
            </li>
          <li className={styles.nav__item}>
            <a href="#">News</a>
          </li>
          <li className={styles.nav__item}>
            <a href="#">Music</a>
          </li>
          <li className={styles.nav__item}>
            <a href="#" id={styles.settings}>Settings</a>
          </li>
        </ul>
    </nav>
    );

export default Navbar;