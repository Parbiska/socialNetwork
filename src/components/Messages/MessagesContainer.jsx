import Messages from './Messages';
import { sendMessage, updateNewMessageText } from './../../redux/messagesReducer';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        state: state.messagesPage
    }
};

const MessagesContainer = connect(mapStateToProps, {
    sendMessage,
    updateNewMessageText
})(Messages);

export default MessagesContainer;