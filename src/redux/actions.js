import {CLEAN_TEST, CURRENT_TEST, EDIT_TEST_TIME, HIDE_LOADER, REQUEST_TESTS, SHOW_LOADER} from "./types";

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function curTest(testName) {
    return {
        type: CURRENT_TEST,
        payload: testName
    }
}

export function editTestTime(testTime) {
    return {
        type: EDIT_TEST_TIME,
        payload: testTime
    }
}

export function getTests() {
    return {
        type: REQUEST_TESTS
    }
}

export function cleanTest() {
    return {
        type: CLEAN_TEST
    }
}