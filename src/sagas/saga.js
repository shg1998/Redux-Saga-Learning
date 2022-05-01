import {takeLatest,put,delay} from 'redux-saga/effects';

function* AddNumAsync(){
    yield delay(3000);
    yield put({type:'ADD_NUM_ASYNC',value:2})
}

export function* watchNumberUp(){
    yield  takeLatest('ADD_NUM',AddNumAsync);
}