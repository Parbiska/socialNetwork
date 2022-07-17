import styles from './Profile.module.css';

const Profile = () => (
    <main className={styles.main}>
        <div className={styles.profile}>
            <img className={styles.profile__img} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />

            <div className={styles.profile__wrapper}>
                <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-AV00000000000193/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720" alt="avatar" className={styles.profile__avatar} />
                <div className={styles.profile__info}>
                    <div className={styles.profile__name}>Demid Z.</div>
                    Date of Birth: 6 june <br />
                    City: Irkutsk <br />
                    Education: School №1 <br />
                    Web Site: <a rel="noreferrer" href="https://github.com/Parbiska" className={styles.profile__link} target="_blank">https://github.com/Parbiska</a>
                </div>
            </div>
            <div className={styles.profile__posts}>
                <h2>My posts</h2>
                <form id={styles.new__post}>
                    <textarea form={styles.new__post} placeholder="your news..." className={styles.profile__area}></textarea>
                    <button className={styles.profile__button} form={styles.new__post}>Send</button>
                </form>
                <div className={styles.profile__post}>Hey, why nobody love me?</div>
                <div className={styles.profile__post}>It's our new program! Hey!</div>
            </div>
        </div>
    </main>
);

export default Profile;