import styles from './User.module.css';
import { NavLink } from 'react-router-dom';

const smileImg = 'https://www.directivegroup.com/wp-content/uploads/2017/03/smile-9047-9380-hd-wallpapers-1.jpg';

const User = props => {
    const follow = () => {
        props.follow(props.id)
        
    };
    const unfollow = () => {
        props.unfollow(props.id)
    };
    

    return (
        <div className={styles.user}>
            <div className={styles.ava}>
                <NavLink to={`/profile/${props.id}`}>
                    <img className={styles.img} src={!!props.photos.small ? props.photos.small : smileImg} alt='ava' />
                </NavLink>
                {props.followed ? 
                <button disabled={props.isButtonPress.some(id => id === props.id)} onClick={unfollow} className={styles.btn}>Unfollow</button> : 
                <button disabled={props.isButtonPress.some(id => id === props.id)} onClick={follow} className={styles.btn}>Follow</button>}
            </div>
            <div className={styles.info}>
                <div className={styles.descr}>
                    <div className={styles.name}>{props.name}</div>
                    {!!props.status ? props.status : 'No status:('}
                </div>
                <div className={styles.location}>
                    {/* {`${props.location.city},`}s */}
                    City,
                    <br />
                    {/* {props.location.country} */}
                    Country
                </div>

            </div>
        </div>
    );
};

export default User;