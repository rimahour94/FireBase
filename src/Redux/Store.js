import thunk from "redux-thunk";
import { createStore,applyMiddleware } from "redux";
import { userReducer } from "./Users/userReducer";
import logger from "redux-logger";

const store=createStore(userReducer,applyMiddleware(thunk,logger))

export default store