import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import profileReducer from './profileReducer';
import messagesReducer  from './messagesReducer';
import usersReducer  from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;