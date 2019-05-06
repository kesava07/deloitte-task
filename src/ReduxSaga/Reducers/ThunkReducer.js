import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    thunkLoading: false,
    thunkData: [],
    thunnkError: null
}
const thunkReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DATA_START_SAGA:
            return {
                ...state,
                thunkLoading: true
            }
        case actionTypes.FETCH_DATA_SUCCESS_SAGA:
            return {
                ...state,
                thunkData: action.payload,
                thunkLoading: false
            }
        case actionTypes.FETCH_DATA_FAIL_SAGA:
            return {
                ...state,
                thunnkError: action.error,
                thunkLoading: false
            }
        default: return state
    }
};

export default thunkReducer;