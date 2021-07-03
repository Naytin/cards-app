import {instance} from "./API";




export const authAPI = {
    registration(data: AuthUserData) {
        return instance.post('auth/register', data)
    },
    login(data: AuthUserData) {
        return instance.post<ResponseUserData>('auth/login', data)
    },
    auth() {
        return instance.post<ResponseUserData>('auth/me', {})
    },
    logout() {
        return instance.delete('auth/me', {})
    },
    changeData(userData: UserData) {
        return instance.put('auth/me', userData)
    },
}

export interface UserData {
    name?: string
    avatar?: string
}

interface ResponseUserData {
    _id: string
    email: string
    name: string
    avatar: string
    publicCardPacksCount: number
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    token: string
    error: string
}


interface AuthUserData {
    email: string
    password: string
    rememberMe?: boolean
}
