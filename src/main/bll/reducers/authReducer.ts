import { ThunkAction } from "redux-thunk";
import {authAPI} from "../../../api/authAPI";
import { AppStoreType } from "../store/store";
import {setAppError, setIsFetching} from "./appReducer";


const initialState = {
    _id: null,
    email: null,
    name: null,
    avatar: null,
    publicCardPacksCount: null,
    isAuth: false
}

const authReducer = (state: UserDataType = initialState, action: TLoginReducerActions): UserDataType=> {
    switch (action.type) {
        case 'login/LOGIN_USER':
            return {
                ...state,
                ...action.data,
            }
        default: {
            return state
        }
    }
}

export const setAuthUserDataAction = (data: UserDataType) => ({type: 'login/LOGIN_USER', data} as const)


//* =============================================================== Thunk creators ==================================>>
export const loginThunk = (data: UserLoginDataType): ThunkType => dispatch => {
    dispatch(setIsFetching(true))
    authAPI.login(data)
        .then(res => {
            if (res.status === 200) {
                dispatch(authThunk())
            } else {
                console.log('something went wrong', res)
            }
        }).catch(error => {
            dispatch(setAppError(error.response.data.error))
            dispatch(setIsFetching(false))
    })
}
export const authThunk = (): ThunkType => dispatch => {
    authAPI.auth()
        .then(res => {
            if (res.status === 200) {
                let {email,
                    _id,
                    name,
                    avatar,
                    publicCardPacksCount} = res.data
                let isAuth = true
                dispatch(setAppError(null))
                dispatch(setIsFetching(false))
                dispatch(setAuthUserDataAction({email, _id, name, avatar, publicCardPacksCount, isAuth}))
            }
        }).catch(error => {
            dispatch(setAppError(error.response.data.error))
            dispatch(setIsFetching(false))
    })
}
export const logoutThunk = (): ThunkType => dispatch => {
    authAPI.logout()
        .then(res => {
            if (res.status === 200) {
                let isAuth = false
                let email = null
                let _id = null
                let name = null
                let avatar = null
                let publicCardPacksCount = null
                dispatch(setAppError(null))
                dispatch(setAuthUserDataAction({email, _id, name, avatar, publicCardPacksCount, isAuth}))
            }
        }).catch(error => {
            dispatch(setAppError(error.response.data.error))
            dispatch(setIsFetching(false))
    })
}

export const registerThunk = (data: UserLoginDataType): ThunkType => dispatch => {
    authAPI.registration(data)
        .then(res => console.log(res))
        .catch(error => {
            dispatch(setAppError(error.response.data.error))
        })
}



//* =============================================================== Types ===========================================>>
export type UserDataType = {
    _id: null | string,
    email: null | string,
    name: null | string,
    avatar: null | string,
    publicCardPacksCount: null | number,
    isAuth: boolean
}

export type TLoginReducerActions =
    ReturnType<typeof setAuthUserDataAction> |
    ReturnType<typeof setIsFetching> |
    ReturnType<typeof setAppError>


type ThunkType = ThunkAction<void, AppStoreType, unknown, TLoginReducerActions>

type UserLoginDataType = {
    email: string
    password: string
    rememberMe?: boolean
}

export default authReducer