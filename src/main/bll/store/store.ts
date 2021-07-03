import {combineReducers, createStore, applyMiddleware, Action} from "redux";
import authReducer, {TLoginReducerActions} from "../reducers/authReducer";
import registrationReducer from "../reducers/registrationReducer";
import resetUserPasswordReducer from "../reducers/resetPasswordReducer";
import newUserPasswordReducer from "../reducers/newPasswordReducer";
import profileReducer from "../reducers/profileReducer";
import thunk, { ThunkAction } from 'redux-thunk'
import {appReducer, TAppReducerActions} from "../reducers/appReducer";


let reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    registration: registrationReducer,
    resetPassword: resetUserPasswordReducer,
    newPassword: newUserPasswordReducer,
    profile: profileReducer
})


//for redux-devtool
// @ts-ignore
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)))

export type AppStoreType = ReturnType<typeof reducers>
export default store

// @ts-ignore
window.store = store; // for dev

export type TAppActions = TAppReducerActions | TLoginReducerActions

//* Common thunk type ===============================================================================================>>
export type TBaseThunk<A extends Action = TAppActions, R = void> = ThunkAction<R, AppStoreType, unknown, A>