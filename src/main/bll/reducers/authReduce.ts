
const initialState = {
    message: 'initialState'
}


const authReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'TEST':
            return {
                ...state,
                message: action.message
            }
        default: {
            return state
        }
    }
}

export const test = (message: any) => ({ type: 'TEST', message} as const)


type ActionTypes = ReturnType<typeof test>

export default authReducer