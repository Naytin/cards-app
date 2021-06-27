import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from "../../../bll/store/store";
import {authThunk} from "../../../bll/reducers/authReducer";
import {PATH} from "../../routes/Routes";
import {Redirect} from "react-router-dom";


const Profile = () => {
    const isAuth = useSelector<AppStoreType>(state => state.auth.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!isAuth) {
            dispatch(authThunk())
        }
    },[])

    if(!isAuth) {
        return <Redirect to={PATH.LOGIN}/>
    }
    return (<>
            <h1>Profile</h1>
        </>
    )
}

export default Profile