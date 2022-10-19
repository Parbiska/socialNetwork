import { auth } from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

const initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => async dispatch => {
    await dispatch(auth());
    
    dispatch(initializedSuccess());
}

export default appReducer;