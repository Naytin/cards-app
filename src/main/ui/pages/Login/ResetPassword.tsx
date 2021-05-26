import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store/store";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import {ResetPasswordStateType, resetUserPassword} from "../../../bll/reducers/resetPasswordReducer";

const ResetPassword = () => {
    const store = useSelector<AppStoreType, ResetPasswordStateType>(store => store.resetPassword)
    const dispatch = useDispatch()

    const click = () => {
        let login = {email: 'email', password: 21212121, login: 'Naytin'}
        dispatch(resetUserPassword(login))
    }
    return (<>
            <h1>Reset password</h1>
            {!store.isAuth && <SuperButton onClick={click}>click to change store</SuperButton>}
        </>
    )
}

export default ResetPassword