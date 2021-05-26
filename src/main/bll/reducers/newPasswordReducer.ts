const NEW_PASSWORD = 'LOGIN/NEW_PASSWORD'

const initialState = {
    id: null,
    email: null,
    login: null,
    password: null,
    isAuth: false
}

const newUserPasswordReducer = (state:NewPasswordStateType = initialState, action: ActionTypes):NewPasswordStateType=> {
    switch (action.type) {
        case NEW_PASSWORD:
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
export const newUserPassword = ({email, password, login}: NewPasswordPayloadType ):NewPasswordACType =>
    ({ type: NEW_PASSWORD, payload: {email, password, login}} as const)


// отправляем пользователю на почту ссылку с поддтверждение почты
// после подтверждения, запрашиваем у пользователя ввести новый пароль
// сетаем в стейт новые данные




type ActionTypes =
    ReturnType<typeof newUserPassword>


export type NewPasswordStateType = {
    id: number | null
    email: string | null
    login: string | null
    password: number | string | null
    isAuth: boolean
}

type NewPasswordPayloadType = {
    email: string | null
    password: number | string | null
    login: string | null

}

export type NewPasswordACType = {
    type: typeof NEW_PASSWORD
    payload: NewPasswordPayloadType
}

export default newUserPasswordReducer