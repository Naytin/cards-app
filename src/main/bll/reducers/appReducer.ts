
const initialState = {
    isFetching: false,
    error: null as ErrorMessageType
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
export const setAppError = (error: ErrorMessageType) => ({type: 'app/SET_ERROR', error} as const)


export type TState = typeof initialState
export type ErrorMessageType = string | null
export type TAppReducerActions = ReturnType<typeof setIsFetching> | ReturnType<typeof setAppError>

