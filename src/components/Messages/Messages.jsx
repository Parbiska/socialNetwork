import styles from './Messages.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {

    const dialogsElements = props.data.dialogs.map(d => <DialogItem name={d.name} id={d.id}></DialogItem>);

    const messages = props.data.messages.map(m => <Message name={m.name} img={m.img} text={m.message}></Message>);

    return (
        <div className={styles.messages}>
            <div className={styles.messages__title}>Messages</div>
            <div className={styles.messages__wrapper}>
                <div className={styles.messages__dialogs}>
                    {dialogsElements}
                </div>
                <div className={styles.messages__divider}></div>
                <div className={styles.messages__dialog}>
                    {messages}
                </div>
            </div>
        </div>
    )
};

export default Dialogs;