import {TBaseThunk} from "../store/store";
import {setAppError, setIsFetching} from "./appReducer";
import {authAPI, UserData} from "../../../api/authAPI";


const initialState = {
    _id: null,
    email: null,
    name: null,
    avatar: null,
    publicCardPacksCount: null,
}


const profileReducer = (state = initialState, action: any):{} => {
    switch (action.type) {
        case 'profile/SET_USER_DATA':
            return {
                ...state,
                ...action.data
            }
        default: {
            return state
        }
    }
}

//* =============================================================== Action creators =================================>>
export const setUserData = (data: UserDataType) => ({type: 'profile/SET_USER_DATA', data} as const)

//* =============================================================== Thunk creators ==================================>>

export const changeUserData = (userData: UserData):ThunkType => dispatch => {
    dispatch(setIsFetching(true))
    authAPI.changeData(userData)
        .then(res => {
            dispatch(setUserData(res.data.updatedUser))
            dispatch(setIsFetching(false))
        }).catch(error => {
        dispatch(setAppError(error.response.data.error))
        dispatch(setIsFetching(false))
    })
}

//* =============================================================== Types ===========================================>>

export type TProfileReducerActions =
    ReturnType<typeof setUserData> |
    ReturnType<typeof setIsFetching>

type ThunkType = TBaseThunk<TProfileReducerActions>

export type UserDataType = {
    _id: null | string,
    email: null | string,
    name:  string | null
    avatar: string | null
    publicCardPacksCount: null | number,
}
export default profileReducer;