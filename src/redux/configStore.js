import { combineReducers, createStore } from "redux";
import week4 from "./modules/week4";

const rootReducer = combineReducers({ week4 });

const store = createStore(rootReducer);

export default store;
