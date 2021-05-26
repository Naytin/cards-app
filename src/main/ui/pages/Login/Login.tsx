import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store/store";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import {AuthStateType, loginUserData} from "../../../bll/reducers/authReducer";

const Login = () => {
    const store = useSelector<AppStoreType, AuthStateType>(store => store.auth)
    const dispatch = useDispatch()

    if(store.isAuth) {
        alert('welcome')
    }

    const click = () => {
        let login = {email: '',id: 12, login: 'Naytin', isAuth: true}
        dispatch(loginUserData(login))
    }
    return (<>
            <h1>Login</h1>
            {!store.isAuth && <SuperButton onClick={click}>click to change store</SuperButton>}
        </>
    )
}

export default Login