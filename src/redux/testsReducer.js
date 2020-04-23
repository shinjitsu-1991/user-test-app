import {GET_TESTS} from "./types";

const initialState = {
    testsList: null
};

export const testsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TESTS:
            return { ...state, testsList: action.payload};
        default:
            return state;
    }
};