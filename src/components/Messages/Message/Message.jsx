import styles from './Message.module.css';

const Message = (props) => (
    <div className={styles.message}>
        <div className={styles.message__user}>
            <img className={styles.message__img} src={props.img} alt="img" />
            {props.name}
        </div>
        <div className={styles.message__text}>{props.text}</div>
    </div>
);

export default Message;