const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        { id: 1, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tempore.', likesCount: 10 },
        { id: 2, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tempore.', likesCount: 25 },
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0,
            };

            if (!!newPost.message) {
                state.posts.push(newPost);
                state.newPostText = '';
            };
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
    }
    return state;
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (newText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText,
});

export default profileReducer;