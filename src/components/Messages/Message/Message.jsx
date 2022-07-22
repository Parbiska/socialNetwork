import styles from './Message.module.css';

const Message = (props) => (
    <div className={styles.message}>
            <img className={styles.message__img} src={props.img} alt="img" />
        <div className={styles.message__text}>
            <div className={styles.message__name}>{props.name}</div>
            {props.text}
        </div>
    </div>
);

export default Message;