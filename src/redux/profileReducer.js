const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initialState = {
    profile: null,
    posts: [
        { id: 1, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tempore.', likesCount: 10 },
        { id: 2, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tempore.', likesCount: 25 },
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            if (!!state.newPostText) {
                return {
                    ...state,
                    newPostText: '',
                    posts: [...state.posts, {
                        id: state.posts.length + 1,
                        message: state.newPostText,
                        likesCount: 0,
                    }],
                };
            };
            return {
                ...state,
            }

        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
};

export const setUserProfile = profile => ({ type: SET_USER_PROFILE,  profile});
export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = newText => ({ type: UPDATE_NEW_POST_TEXT, newText });

export default profileReducer;