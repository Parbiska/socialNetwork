import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const Header = props => {
  let img = null;
  if(props.isAuth) {
    if (!!props.img) {
      img = <img className={styles.header__img} src={props.img} alt="userImg" />
    } else {
      img = <img className={styles.header__img} src='https://www.directivegroup.com/wp-content/uploads/2017/03/smile-9047-9380-hd-wallpapers-1.jpg' alt="userImg" /> 
    }
  }
  return (
    <header className={styles.header}>
      <div className={styles.header__network}>
        <img className={styles.header__logo} src={logo} alt="logo" />
        Social Network
      </div>

      <div className={styles.header__login__wrapper}>
        <div className={styles.header__login}>
          {props.isAuth ? props.login : <NavLink to='/login' className={styles.header__login__btn}>Login</NavLink>}
        </div>
        {img}
      </div>
    </header>
  )
};

export default Header;