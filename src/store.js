import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { call } from 'redux-saga/effects';
import initstate from './initState';
import reducer from './reducer';

import apiSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, initstate, applyMiddleware(
  sagaMiddleware
));

function* allSaga() {
  yield [
    call(apiSaga)
  ]
}

sagaMiddleware.run(allSaga);

export default store;
