import {combineReducers, legacy_createStore as createStore} from 'redux';
import profileReducer from './profileReducer';
import messagesReducer  from './messagesReducer';
import usersReducer  from './usersReducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;