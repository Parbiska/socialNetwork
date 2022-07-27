const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const smileImg = 'https://www.directivegroup.com/wp-content/uploads/2017/03/smile-9047-9380-hd-wallpapers-1.jpg';
const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tempore.';
const avaImg = 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-AV00000000000193/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720';

const initianalState = {
    dialogs: [
        { id: 1, name: 'Dimych', img: smileImg },
        { id: 2, name: 'Andrey', img: smileImg },
        { id: 3, name: 'Svetlana', img: smileImg },
        { id: 4, name: 'Sasha', img: smileImg },
        { id: 5, name: 'Viktor', img: smileImg },
        { id: 6, name: 'Valera', img: smileImg },
    ],
    messages: [
        { id: 1, message: lorem, img: smileImg, name: 'userName' },
        { id: 2, message: lorem, img: avaImg, name: 'Me' },
        { id: 3, message: lorem, img: avaImg, name: 'Me' },
        { id: 4, message: lorem, img: smileImg, name: 'userName' },
    ],
    newMessageText: '',

};

const messagesReducer = (state = initianalState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: 
            if (!!state.newMessageText) {
                return {
                    ...state,
                    newMessageText: '',
                    messages: [...state.messages, {
                        id: state.messages.length + 1, 
                        message: state.newMessageText,
                        img: avaImg,
                        name: 'Me',
                    }],
                };
            };
            return {
                ...state
            };

        case UPDATE_NEW_MESSAGE_TEXT: 
            return {
                ...state,
                newMessageText: action.newText,
            };

        default:
            return state;
    }
};

export const addMessageAC= () => ({ type: ADD_MESSAGE, });
export const updateNewMessageTextAC = (newText) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: newText,
});

export default messagesReducer;