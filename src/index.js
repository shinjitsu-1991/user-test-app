import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import {rootReducer} from "./redux/rootReducer";
import {sagaWatcher} from "./redux/sagas";

const saga = createSagaMiddleware();
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            thunk, saga
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

saga.run(sagaWatcher);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
