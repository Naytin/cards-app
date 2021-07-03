import {authAPI} from "../../../api/authAPI";
import {setAppError, setIsFetching, setIsInitialized} from "./appReducer";
import {TBaseThunk} from "../store/store";
import {setUserData} from "./profileReducer";


const initialState = {
    isAuth: false
}

const authReducer = (state: AuthType = initialState, action: TLoginReducerActions): AuthType=> {
    switch (action.type) {
        case 'login/LOGIN_USER':
            return {
                ...state,
                isAuth: action.isAuth
            }
        default: {
            return state
        }
    }
}

export const setUserAuth = (isAuth: boolean) => ({type: 'login/LOGIN_USER', isAuth} as const)


//* =============================================================== Thunk creators ==================================>>
//todo need to create a function that will help you avoid code duplication on loginThunk and authThunk
export const loginThunk = (data: UserLoginDataType): ThunkType => dispatch => {
    dispatch(setIsFetching(true))
    authAPI.login(data)
        .then(res => {
                let {email,
                    _id,
                    name,
                    avatar,
                    publicCardPacksCount} = res.data
                dispatch(setAppError(null))
                dispatch(setUserAuth(true))
                dispatch(setIsFetching(false))
                dispatch(setUserData({email, _id, name, avatar, publicCardPacksCount}))

        }).catch(error => {
            dispatch(setAppError(error.response.data.error))
            dispatch(setIsFetching(false))
    })
}
export const authThunk = (): ThunkType => dispatch => {
    authAPI.auth()
        .then(res => {
                let {email,
                    _id,
                    name,
                    avatar,
                    publicCardPacksCount} = res.data
                dispatch(setIsInitialized(false))
                dispatch(setAppError(null))
                dispatch(setUserAuth(true))
                dispatch(setIsFetching(false))
                dispatch(setUserData({email, _id, name, avatar, publicCardPacksCount}))
        }).catch(error => {
            dispatch(setIsInitialized(false))
            dispatch(setAppError(error.response.data.error))
            dispatch(setIsFetching(false))
    })
}
export const logoutThunk = (): ThunkType => dispatch => {
    authAPI.logout()
        .then(res => {
                let email = null
                let _id = null
                let name = null
                let avatar = null
                let publicCardPacksCount = null
                dispatch(setUserAuth(false))
                dispatch(setAppError(null))
                dispatch(setUserData({email, _id, name, avatar, publicCardPacksCount}))
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
export type AuthType = {
    isAuth: boolean
}

export type TLoginReducerActions =
    ReturnType<typeof setUserAuth> |
    ReturnType<typeof setIsFetching> |
    ReturnType<typeof setIsFetching> |
    ReturnType<typeof setUserData> |
    ReturnType<typeof setIsInitialized>


type ThunkType = TBaseThunk<TLoginReducerActions>

type UserLoginDataType = {
    email: string
    password: string
    rememberMe?: boolean
}

export default authReducer