import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store/store";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import {NewPasswordStateType, newUserPassword} from "../../../bll/reducers/newPasswordReducer";

const NewPassword = () => {
    const store = useSelector<AppStoreType, NewPasswordStateType>(store => store.newPassword)
    const dispatch = useDispatch()

    const click = () => {
        let login = {email: 'email', password: 21212121, login: 'Naytin'}
        dispatch(newUserPassword(login))
    }
    return (<>
            <h1>New password</h1>
            {!store.isAuth && <SuperButton onClick={click}>click to change store</SuperButton>}
        </>
    )
}

export default NewPassword