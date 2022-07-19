import styles from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => (
    <div className={styles.user}>
        <NavLink className={styles.user__link} to={`/messages/${props.id}`}>{props.name}</NavLink>
    </div>
);

export default DialogItem;