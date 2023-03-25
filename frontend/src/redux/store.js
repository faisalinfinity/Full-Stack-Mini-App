import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/authReducer";
import { notesReducer } from "./notes/notesReducer";
const rootReducer=combineReducers({
    auth:authReducer,
    notes:notesReducer

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store=legacy_createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))