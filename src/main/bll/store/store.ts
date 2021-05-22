import {combineReducers, createStore} from "redux";
import authReducer from "../reducers/authReduce";


let reducers = combineReducers({
    auth: authReducer,
})


//for redux-devtool
// @ts-ignore
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const store = createStore(reducers,composeEnhancers())

export type AppStoreType = ReturnType<typeof reducers>
export default store

// @ts-ignore
window.store = store; // for dev