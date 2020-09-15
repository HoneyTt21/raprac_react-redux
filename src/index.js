import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {createStore} from "redux";
import rootReducer from "./modules/index";
import {Provider} from "react-redux";
import {composeWithDevTools} from "../node_modules/redux-devtools-extension/index";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
