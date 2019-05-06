import * as actionTypes from './ActionTypes';
import Axios from 'axios';


export const fetchDataStart = () => ({
    type: actionTypes.FETCH_DATA_START
});

export const fetchDataSuccess = data => ({
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload: data
});

export const fetchDataFail = err => ({
    type: actionTypes.FETCH_DATA_FAIL,
    error: err
});

export const getData = () => {
    return dispatch => {
        dispatch(fetchDataStart());
        Axios.get("https://api.talentscreen.io/v1/subjects")
            .then(res => {
                dispatch(fetchDataSuccess(res.data.slice(0, 7)))
            })
            .catch(err => {
                dispatch(fetchDataFail(err))
            })
    }
}