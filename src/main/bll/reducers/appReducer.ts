import {TBaseThunk} from "../store/store";
import {authThunk} from "./authReducer";

const initialState = {
    isFetching: false,
    error: null as ErrorMessageType,
    isInitialized: false,
}

export const appReducer = (state: TState = initialState, action: TAppReducerActions):TState => {
    switch (action.type) {
        case 'app/SET_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'app/SET_ERROR':
            return {
                ...state,
                error: action.error
            }
        default: {
            return state
        }
    }
}

export const setIsFetching = (isFetching: boolean) =>
    ({type: 'app/SET_IS_FETCHING', isFetching} as const)
export const _setAppError = (error: ErrorMessageType) => ({type: 'app/SET_ERROR', error} as const)
export const setIsInitialized = (isInitialized: boolean) =>
    ({type: 'app//SET_IS_INITIALIZED', isInitialized} as const)

export const setAppError = (error: string | null): ThunkType => dispatch => {
    dispatch(_setAppError(error))
    setTimeout(() => {
        dispatch(_setAppError(null))
    }, 4000)
}

export const initializeApp = (): ThunkType => dispatch => {
    dispatch(setIsFetching(true))
    dispatch(authThunk())
}



export type TState = typeof initialState
export type ErrorMessageType = string | null

export type TAppReducerActions =
    ReturnType<typeof setIsFetching> |
    ReturnType<typeof _setAppError> |
    ReturnType<typeof setIsInitialized>

type ThunkType = TBaseThunk<TAppReducerActions>