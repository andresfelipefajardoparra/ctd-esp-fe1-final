import { combineReducers, createStore, applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import {TypedUseSelectorHook, useSelector as useReduxSelector,} from "react-redux";
import personajesReducer from "./reducers/personajesReducer";

const rootReducer = combineReducers({
    personajes: personajesReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;

// Tipamos el hook useSelector
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk))
);
export default store;