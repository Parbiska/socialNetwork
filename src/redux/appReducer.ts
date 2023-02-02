import { auth } from "./authReducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED-SUCCESS';

const initialState = {
    initialized: false
};

type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: {type: string, payload: object}): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
    payload: object
}

const initializedSuccess = (): InitializedSuccessActionType => ({ type: INITIALIZED_SUCCESS, payload: { initialized: true } });

// type DispatchType = (Function: Promise<any>) => void; error

export const initializeApp = () => async (dispatch: any) => {
    await dispatch(auth());
    
    dispatch(initializedSuccess());
}

export default appReducer;