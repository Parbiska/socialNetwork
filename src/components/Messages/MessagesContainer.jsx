import Messages from './Messages';
import { sendMessage, updateNewMessageText } from './../../redux/messagesReducer';
import { connect } from 'react-redux';
import { WithAuthRedirect } from './../../hoc/WithAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = state => ({
        state: state.messagesPage
});

export default compose(connect(mapStateToProps, { sendMessage, updateNewMessageText }), WithAuthRedirect)(Messages);