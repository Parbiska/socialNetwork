import {combineReducers, legacy_createStore as createStore} from 'redux';
import profileReducer from './profileReducer';
import  messagesReducer  from './messagesReducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer
});

const store = createStore(reducers);

export default store;