import styles from './Header.module.css';

const Header = () => (
    <header className={styles.header}>
      <div className={styles.header__network}>
        <img className={styles.header__logo} src="logo192.png" alt="logo" />
        Social Network
      </div>
      <img className={styles.header__user} src="https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-AV00000000000193/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720" alt="userImg" />
    </header>
    );

export default Header;