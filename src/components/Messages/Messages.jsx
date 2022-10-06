import styles from './Messages.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { formField } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = props => (
    <form onSubmit={props.handleSubmit} className={styles.messages__add}>
        <Field validate={[required, maxLength100, ]} element='textarea' component={formField} name='messageText' className={styles.messages__area} placeholder="your message..."></Field>
        <button type='submit' className={styles.messages__button}>Send</button>
    </form>
);

const MessageReduxForm = reduxForm({ form: 'newMessage' })(AddMessageForm);

const Messages = (props) => {

    const dialogsElements = props.state.dialogs.map(d => <DialogItem key={d.id} img={d.img} name={d.name} id={d.id}></DialogItem>);

    const messages = props.state.messages.map(m => <Message key={m.id} name={m.name} img={m.img} text={m.message}></Message>);

    const onSubmit = formData => {
        props.sendMessage(formData.messageText);
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
                    <MessageReduxForm onSubmit={onSubmit}></MessageReduxForm>
                </div>
            </div>
        </div>
    )
};

export default Messages;