import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { personajesReducer } from "./reducers/personajesReducer";
/**
 * 
 */
const rootReducer = combineReducers({
    personajes: personajesReducer,
})
/**
 * 
 */
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
/**
 * 
 */
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))