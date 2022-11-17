import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/avatar.png';

const Header = ({avatar, isAuth, logout}) => {
  const img =  avatar || userPhoto;

  return (
    <header className={styles.header}>
      <div className={styles.header__network}>
        <img className={styles.header__logo} src={logo} alt="logo" />
        Social Network
      </div>

      <div className={styles.header__login__wrapper}>
        <div className={styles.header__login}>
          {isAuth 
          ? <button onClick={logout} className={styles.header__logout__btn}>Log out</button> 
          : <NavLink to='/login' className={styles.header__login__btn}>Login</NavLink>}
        </div>
        <NavLink className={styles.header__img_wr} to="/profile"><img className={styles.header__img} src={img} alt="userImg"/></NavLink>
      </div>
    </header>
  )
};

export default Header;