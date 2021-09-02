import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

import rootReducer from "./root-reducer";

//setup middleware
const middlewares = [logger];

//setup store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
