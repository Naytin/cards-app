const SET_USER_PROFILE = 'PROFILE/SET_USER_PROFILE';

const initialState = {
    name: null,
    age: null
}

const profileReducer = (state: ProfileStateType = initialState, action: ActionTypes):ProfileStateType => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                ...action.payload
            }
        default: {
            return state
        }
    }
}

export const setUserProfile = ({name, age}:ProfileStateType):ProfileACType =>
    ({ type: SET_USER_PROFILE, payload: {name,age}} as const)



type ActionTypes = ReturnType<typeof setUserProfile>

export type ProfileStateType = {
    name: string | null
    age: number | null
}

export type ProfileACType = {
    type: typeof SET_USER_PROFILE
    payload: ProfileStateType
};

export default profileReducer;