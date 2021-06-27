import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.scss'
import {PATH} from "../routes/Routes";
import {logoutThunk} from "../../bll/reducers/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../bll/store/store";


const Header = () => {
    const isAuth = useSelector<AppStoreType>(state => state.auth.isAuth)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logoutThunk())
    }

    return (
        <div className={s.wrapper}>
            <h3 className={s.title}>CARDS APP</h3>
            <ul className={s.list}>
                <li>
                    <NavLink activeClassName={s.active} to={PATH.PROFILE}>Profile</NavLink>
                </li>
                <li>
                    {isAuth ?
                        <NavLink activeClassName={s.active} to={PATH.LOGIN} onClick={handleLogout}>logout</NavLink> :
                        <NavLink activeClassName={s.active} to={PATH.LOGIN}>Login</NavLink>}
                </li>
                <li><NavLink activeClassName={s.active} to={PATH.REGISTRATION}>Registration</NavLink></li>
                <li><NavLink activeClassName={s.active} to={PATH.RESET_PASSWORD}>Restore password</NavLink></li>
                <li><NavLink activeClassName={s.active} to={PATH.NEW_PASSWORD}>New password</NavLink></li>
                <li><NavLink activeClassName={s.active} to={PATH.TEST}>Tests</NavLink></li>
            </ul>
        </div>
    )
}

export default Header