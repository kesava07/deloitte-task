import * as actionTypes from './ActionTypes';

export const fetchDataStart = () => ({
    type: actionTypes.FETCH_DATA_START_SAGA
});

export const fetchDataSuccess = data => ({
    type: actionTypes.FETCH_DATA_SUCCESS_SAGA,
    payload: data
});

export const fetchDataFail = err => ({
    type: actionTypes.FETCH_DATA_FAIL_SAGA,
    error: err
});

export const fetchData = () => ({
    type: actionTypes.FETCH_DATA_SAGA
})