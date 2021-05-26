import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store/store";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import {ProfileStateType, setUserProfile} from "../../../bll/reducers/profileReducer";

const Profile = () => {
    const store = useSelector<AppStoreType, ProfileStateType>(store => store.profile)
    const dispatch = useDispatch()

    const click = () => {
        let login = {name: 'Vova', age: 33}
        dispatch(setUserProfile(login))
    }
    return (<>
            <h1>New password</h1>
            {!store.name && <SuperButton onClick={click}>click to change store</SuperButton>}
        </>
    )
}

export default Profile