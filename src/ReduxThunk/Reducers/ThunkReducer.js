import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    thunkLoading: false,
    thunkData: [],
    thunnkError: null
}
const thunkReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DATA_START:
            return {
                ...state,
                thunkLoading: true
            }
        case actionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                thunkData: action.payload,
                thunkLoading: false
            }
        case actionTypes.FETCH_DATA_FAIL:
            return {
                ...state,
                thunnkError: action.error,
                thunkLoading: false
            }
        default: return state
    }
};

export default thunkReducer;