import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store/store";
import {RegistrationStateType, setRegistrationData} from "../../../bll/reducers/registrationReducer";
import SuperButton from "../../common/c2-SuperButton/SuperButton";

const Registration = () => {
    const store = useSelector<AppStoreType, RegistrationStateType>(store => store.registration)
    const dispatch = useDispatch()

    const click = () => {
        let login = {email: 'email', password: 21212121, login: 'Naytin'}
        dispatch(setRegistrationData(login))
    }
    return (
        <>
            <h1>Registration</h1>
            {!store.isAuth && <SuperButton onClick={click}>click to change store</SuperButton>}
        </>
    )
};

export default Registration;