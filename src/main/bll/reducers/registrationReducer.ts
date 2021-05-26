const REGISTRATION_DATA = 'LOGIN/REGISTRATION_USER'

const initialState = {
    id: null,
    email: null,
    login: null,
    password: null,
    isAuth: false
}

const registrationReducer = (state:RegistrationStateType = initialState, action: ActionTypes): RegistrationStateType => {
    switch (action.type) {
        case REGISTRATION_DATA:
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

export const setRegistrationData = ({email,password,login}:RegistrationPayloadType):RegistrationUserACType =>
    ({ type: REGISTRATION_DATA, payload: {email, password, login}} as const)




type ActionTypes =
    ReturnType<typeof setRegistrationData>


export type RegistrationStateType = {
    id: number | null
    email: string | null
    login: string | null
    password: number | string | null
    isAuth: boolean
}

type RegistrationPayloadType = {
    email: string | null
    password: number | string | null
    login: string | null

}

export type RegistrationUserACType = {
    type: typeof REGISTRATION_DATA
    payload: RegistrationPayloadType
}

export default registrationReducer