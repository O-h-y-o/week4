import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import week4 from "./modules/week4";

const middlewares = [thunk];

const rootReducer = combineReducers({ week4 });
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
