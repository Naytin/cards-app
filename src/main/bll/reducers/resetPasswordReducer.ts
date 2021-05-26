const RESET_PASSWORD = 'LOGIN/RESET_PASSWORD'

const initialState = {
    id: null,
    email: null,
    login: null,
    password: null,
    isAuth: false
}

const resetUserPasswordReducer = (state:ResetPasswordStateType = initialState, action: ActionTypes):ResetPasswordStateType=> {
    switch (action.type) {
        case RESET_PASSWORD:
            return {
                ...state,
                ...action.payload,
                id: 12,
                isAuth: true
            }
        default: {
            return state
        }
    }
}
export const resetUserPassword = ({email, password, login}: ResetPasswordPayloadType ):ResetPasswordACType =>
    ({ type: RESET_PASSWORD, payload: {email, password, login}} as const)


// отправляем пользователю на почту ссылку с поддтверждение почты
// после подтверждения, запрашиваем у пользователя ввести новый пароль
// сетаем в стейт новые данные




type ActionTypes =
    ReturnType<typeof resetUserPassword>


export type ResetPasswordStateType = {
    id: number | null
    email: string | null
    login: string | null
    password: number | string | null
    isAuth: boolean
}

type ResetPasswordPayloadType = {
    email: string | null
    password: number | string | null
    login: string | null

}

export type ResetPasswordACType = {
    type: typeof RESET_PASSWORD
    payload: ResetPasswordPayloadType
}

export default resetUserPasswordReducer