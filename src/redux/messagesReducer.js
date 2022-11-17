import userPhoto from '../assets/images/avatar.png';

const SEND_MESSAGE = 'messages/SEND-MESSAGE';
const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tempore.';

const initianalState = {
    dialogs: [
        { id: 1, name: 'Dimych', img: userPhoto },
        { id: 2, name: 'Andrey', img: userPhoto },
        { id: 3, name: 'Svetlana', img: userPhoto },
        { id: 4, name: 'Sasha', img: userPhoto },
        { id: 5, name: 'Viktor', img: userPhoto },
        { id: 6, name: 'Valera', img: userPhoto },
    ],
    messages: [
        { id: 1, message: lorem, img: userPhoto, name: 'userName' },
        { id: 2, message: lorem, img: userPhoto, name: 'You' },
        { id: 3, message: lorem, img: userPhoto, name: 'You' },
        { id: 4, message: lorem, img: userPhoto, name: 'userName' },
    ]
};

const messagesReducer = (state = initianalState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: 
            if (!!action.messageText) {
                return {
                    ...state,
                    newMessageText: '',
                    messages: [...state.messages, {
                        id: state.messages.length + 1, 
                        message: action.messageText,
                        img: userPhoto,
                        name: 'You',
                    }],
                };
            };
            return {
                ...state
            };

        default:
            return state;
    }
};

export const sendMessage= messageText => ({ type: SEND_MESSAGE, messageText });

export default messagesReducer;