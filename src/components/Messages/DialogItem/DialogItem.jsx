import styles from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => (
    <div className={styles.user}>
        
        <NavLink className={(navData) => (navData.isActive ? styles.user__link_active : '') + ' ' + styles.user__link} to={`/messages/${props.id}`}>
            <img className={styles.user__img} src={props.img} alt="User:" />
            {props.name}
        </NavLink>
    </div>
);

export default DialogItem;