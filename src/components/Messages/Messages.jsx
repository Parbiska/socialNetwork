import styles from './Messages.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import React from 'react';

const Messages = (props) => {

    const dialogsElements = props.state.dialogs.map(d => <DialogItem key={d.id} img={d.img} name={d.name} id={d.id}></DialogItem>);

    const messages = props.state.messages.map(m => <Message key={m.id} name={m.name} img={m.img} text={m.message}></Message>);

    const changeTextarea = (e) => {
        const text = e.target.value;
        props.updateNewMessageText(text);
    };

    const onSendMessage = () => {
        props.sendMessage();
    };

return (
    <div className={styles.messages}>
        <div className={styles.messages__wrapper}>
            <div className={styles.messages__dialogs}>
                <h1 className={styles.messages__title}>Messages</h1>
                {dialogsElements}
            </div>
            <div className={styles.messages__dialog}>
                <div className={styles.messages__content}>
                    {messages}
                </div>
                <form className={styles.messages__add}>
                    <textarea onChange={changeTextarea} className={styles.messages__area} placeholder="your message..." value={props.state.newMessageText}></textarea>
                    <button type='button' onClick={onSendMessage} className={styles.messages__button}>Send</button>
                </form>
            </div>
        </div>
    </div>
)
};

export default Messages;