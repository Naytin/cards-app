const SET_USER_DATA = 'LOGIN/SET_USER_DATA'
const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state:AuthStateType = initialState, action: ActionTypes):AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true}
        default: {
            return state
        }
    }
}

export const setAuthUserData = ({email,id,login,isAuth}:AuthStateType):AuthUserACType =>
    ({ type: SET_USER_DATA, payload: {email, id,  login, isAuth}} as const)
export const loginUserData = ({email,id,login,isAuth}:AuthStateType):AuthUserACType =>
    ({ type: SET_USER_DATA, payload: {email, id,  login, isAuth}} as const)


type ActionTypes = ReturnType<typeof setAuthUserData>

export type AuthStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type AuthUserACType = {
    type: typeof SET_USER_DATA
    payload: AuthStateType
}

export default authReducer