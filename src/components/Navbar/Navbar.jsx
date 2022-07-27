import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.nav}>
    <ul className={styles.nav__list}>
      <li className={styles.nav__item}>
        <NavLink className={navData => (navData.isActive ? styles.nav__link_active : '') + ' ' + styles.nav__link} to='/profile'>Profile</NavLink>
      </li>
      <li className={styles.nav__item}>
        <NavLink className={navData => (navData.isActive ? styles.nav__link_active : '') + ' ' + styles.nav__link} to='/messages'>Messages</NavLink>
      </li>
      <li className={styles.nav__item}>
        <NavLink className={navData => (navData.isActive ? styles.nav__link_active : '') + ' ' + styles.nav__link} to='/news'>News</NavLink>
      </li>
      <li className={styles.nav__item}>
        <NavLink className={navData => (navData.isActive ? styles.nav__link_active : '') + ' ' + styles.nav__link} to='/music'>Music</NavLink>
      </li>
      <li className={styles.nav__item}>
        <NavLink className={navData => (navData.isActive ? styles.nav__link_active : '') + ' ' + styles.nav__link} to='/users'>Find user</NavLink>
      </li>
      <li className={styles.nav__item}>
        <NavLink className={navData => (navData.isActive ? styles.nav__link_active : '') + ' ' + styles.nav__link} to='/settings'>Settings</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;