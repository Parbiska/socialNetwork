import { DialogType, MessageType } from './../types/types';
const SEND_MESSAGE = 'messages/SEND-MESSAGE';
const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tempore.';
const userPhoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwWMJbZoZ26ZyYB8M-1e7OLBVUWXRLNSO6A&usqp=CAU';

const initianalState = {
    dialogs: [
        { id: 1, name: 'Dimych', img: userPhoto },
        { id: 2, name: 'Andrey', img: userPhoto },
        { id: 3, name: 'Svetlana', img: userPhoto },
        { id: 4, name: 'Sasha', img: userPhoto },
        { id: 5, name: 'Viktor', img: userPhoto },
        { id: 6, name: 'Valera', img: userPhoto },
    ] as Array<DialogType>,
    messages: [
        { id: 1, message: lorem, img: userPhoto, name: 'userName' },
        { id: 2, message: lorem, img: userPhoto, name: 'You' },
        { id: 3, message: lorem, img: userPhoto, name: 'You' },
        { id: 4, message: lorem, img: userPhoto, name: 'userName' },
    ] as Array<MessageType>,
    newMessageText: null as string | null,
};

type InitialStateType = typeof initianalState;

const messagesReducer = (state = initianalState, action: {type: string, payload: any}): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE: 
            if (!!action.payload) {
                return {
                    ...state,
                    newMessageText: '',
                    messages: [...state.messages, {
                        id: state.messages.length + 1, 
                        message: action.payload.message,
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

type SendMessageActionCreatorType = {
    type: typeof SEND_MESSAGE,
    payload: { message: string }
}
export const sendMessage= (message: string): SendMessageActionCreatorType => ({ type: SEND_MESSAGE, payload: { message } });

export default messagesReducer;