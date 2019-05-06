import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkReducer from './ReduxThunk/Reducers/ThunkReducer';
import sagaReducer from './ReduxSaga/Reducers/ThunkReducer';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import watchFetchData from './ReduxSaga/Sagas/Saga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    thunk: thunkReducer,
    saga: sagaReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)));
sagaMiddleware.run(watchFetchData);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
