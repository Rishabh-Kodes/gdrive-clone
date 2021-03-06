import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { fileReducer } from "./reducers/fileReducer";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
const loggerMiddleware = createLogger();
const store = createStore(
  fileReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
