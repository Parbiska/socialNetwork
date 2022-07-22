import profileReducer from './profileReducer';
import  messagesReducer  from './messagesReducer';
const smileImg = 'https://www.directivegroup.com/wp-content/uploads/2017/03/smile-9047-9380-hd-wallpapers-1.jpg';
const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tempore.';
const avaImg = 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-AV00000000000193/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720';


const store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: lorem, likesCount: 10 },
                { id: 2, message: lorem, likesCount: 25 },
            ],
            newPostText: '',
        },
        messagesPage: {
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
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action); 
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

        this._callSubscriber();
    },
};

export default store;
window.store = store;