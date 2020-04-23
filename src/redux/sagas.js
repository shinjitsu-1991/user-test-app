import {takeEvery, put, call} from 'redux-saga/effects';
import {
    CURRENT_TEST,
    CURRENT_TEST_DATA,
    EDIT_CORRECT_ANSWERS,
    EDIT_CUR_QUESTION,
    EDIT_TEST_TIME,
    GET_TESTS,
    REQUEST_TESTS
} from "./types";
import {editTestTime, hideLoader, showLoader} from "./actions";

export function* sagaWatcher() {
    yield takeEvery(REQUEST_TESTS, sagaWorker);
    yield takeEvery(CURRENT_TEST, getCurrentTest);
}

function* getCurrentTest(action) {
    const data = yield call(getCurrentTestData, action.payload[0]);
    yield put({type:CURRENT_TEST_DATA, payload: data});
    yield put({type:EDIT_TEST_TIME, payload:action.payload[1]});
    yield put({type:EDIT_CUR_QUESTION, payload:0});
    yield put({type:EDIT_CORRECT_ANSWERS, payload:0});
}

async function getCurrentTestData(testName) {
    const response = await fetch(`${process.env.PUBLIC_URL}/data/tests/${testName}.json`);
    return await response.json();
}

function* sagaWorker() {
    yield put(showLoader());
    const payload = yield call(fetchTests);
    yield put({type: GET_TESTS, payload});
    yield put(hideLoader());
}

async function fetchTests() {
    const response = await fetch(process.env.PUBLIC_URL+"/data/tests-list.json");
    return await response.json();
}