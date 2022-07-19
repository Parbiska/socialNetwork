const smileImg = 'https://www.directivegroup.com/wp-content/uploads/2017/03/smile-9047-9380-hd-wallpapers-1.jpg';
const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tempore.';

const state = {
    profilePage: {
        posts: [
            { id: 1, message: lorem, likesCount: 10 },
            { id: 2, message: lorem, likesCount: 25 },
        ],
    },
    messagesPage: {
        dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrey' },
            { id: 3, name: 'Svetlana' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Viktor' },
            { id: 6, name: 'Valera' }
        ],
        messages: [
            { id: 1, message: lorem, img: smileImg, name: 'userName' },
            { id: 2, message: lorem, img: smileImg, name: 'Me' },
            { id: 3, message: lorem, img: smileImg, name: 'Me' },
            { id: 4, message: lorem, img: smileImg, name: 'userName' }
        ],
    },
};

export default state;