import {combineReducers, createStore} from "redux";
import authReducer from "../reducers/authReducer";
import registrationReducer from "../reducers/registrationReducer";
import resetUserPasswordReducer from "../reducers/resetPasswordReducer";
import newUserPasswordReducer from "../reducers/newPasswordReducer";
import profileReducer from "../reducers/profileReducer";


let reducers = combineReducers({
    auth: authReducer,
    registration: registrationReducer,
    resetPassword: resetUserPasswordReducer,
    newPassword: newUserPasswordReducer,
    profile: profileReducer
})


//for redux-devtool
// @ts-ignore
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const store = createStore(reducers,composeEnhancers())

export type AppStoreType = ReturnType<typeof reducers>
export default store

// @ts-ignore
window.store = store; // for dev