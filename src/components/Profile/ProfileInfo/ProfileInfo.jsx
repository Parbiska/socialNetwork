import styles from './ProfileInfo.module.css';

const ProfileInfo = () => (
    <div>
        <img className={styles.img} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt='user'/>
        <div className={styles.wrapper}>
            <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-AV00000000000193/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720" alt="avatar" className={styles.avatar} />
            <div className={styles.info}>
                <div className={styles.name}>Demid Z.</div>
                Date of Birth: 6 june <br />
                City: Irkutsk <br />
                Education: School №1 <br />
                Web Site: <a rel="noreferrer" href="https://github.com/Parbiska" className={styles.link} target="_blank">https://github.com/Parbiska</a>
            </div>
        </div>
    </div>
);

export default ProfileInfo;