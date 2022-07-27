import Messages from './Messages';
import { addMessageAC, updateNewMessageTextAC } from './../../redux/messagesReducer';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        state: state.messagesPage
    }
};

const mapDispatchToProps = dispatch => {
    return {
        sendMessage: () => {
            return dispatch(addMessageAC());
        },
        updateNewMessage: text => {
            return dispatch(updateNewMessageTextAC(text));
        },
    }
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;