import  profileReducer, { addPost, deletePost, } from '../profileReducer'

const state = {
    posts: [
        { id: 1, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tempore.', likesCount: 10 },
        { id: 2, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tempore.', likesCount: 25 },
    ]
};

it('length of posts should be increase', () => {
    // 1. Start Data
    const action = addPost('test post');

    // 2. Action
    const newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {
    // 1. Start Data
    const action = addPost('test post');

    // 2. Action
    const newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts[2].message).toBe('test post');
});

it('after deleting length of messages should be decrease', () => {
    // 1. Start Data
    const action = deletePost(2);

    // 2. Action
    const newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts.length).toBe(1);
});

it("after deleting length of messages shouldn't be decrease if id is incorrect", () => {
    // 1. Start Data
    const action = deletePost(3);

    // 2. Action
    const newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts.length).toBe(2);
});