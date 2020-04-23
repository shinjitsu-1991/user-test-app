import {EDIT_CUR_QUESTION, CURRENT_TEST_DATA, EDIT_TEST_TIME, EDIT_CORRECT_ANSWERS, CLEAN_TEST} from "./types";

const initialState = {
    cur_test_data: null,
    test_time: null,
    cur_question: null,
    correct_answers: null
};

export const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_TEST_DATA:
            return { ...state, cur_test_data: action.payload };
        case EDIT_TEST_TIME:
            return { ...state, test_time: action.payload };
        case EDIT_CUR_QUESTION:
            return { ...state, cur_question: action.payload };
        case EDIT_CORRECT_ANSWERS:
            return { ...state, correct_answers: action.payload };
        case CLEAN_TEST:
            return { ...state, correct_answers: null,  cur_test_data: null, cur_question: null};
        default:
            return state;
    }
};