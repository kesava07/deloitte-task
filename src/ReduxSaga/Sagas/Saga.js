import { takeLatest, put } from 'redux-saga/effects';
import * as actionTypes from '../Actions/ActionTypes';
import * as actions from '../Actions/Index';
import Axios from 'axios';

function* fetchData() {
    yield put(actions.fetchDataStart())
    try {
        const response = yield Axios.get("https://jsonplaceholder.typicode.com/todos");
        yield put(actions.fetchDataSuccess(response.data.slice(0, 7)));
    }
    catch (err) {
        yield put(actions.fetchDataFail(err));
    }
};

export default function* watchFetchData() {
    yield takeLatest(actionTypes.FETCH_DATA_SAGA, fetchData)
}