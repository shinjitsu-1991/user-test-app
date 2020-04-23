import {combineReducers} from "redux";
import {testsReducer} from "./testsReducer";
import {testReducer} from "./testReducer";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
    tests: testsReducer,
    loading: appReducer,
    cur_test: testReducer
});