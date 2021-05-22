import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.scss'
import {PATH} from "../routes/Routes";
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from "../../bll/store/store";
import { test } from '../../bll/reducers/authReduce';
import SuperButton from "../common/c2-SuperButton/SuperButton";

const initialState = [
    {link: PATH.LOGIN, active: true},
    {link: PATH.REGISTRATION, active: false},
    {link: PATH.PROFILE, active: false},
    {link: PATH.RESET_PASSWORD, active: false},
    {link: PATH.NEW_PASSWORD, active: false},
    {link: PATH.TEST, active: false},
    {link: PATH['404'], active: false},
]

const Header = () => {
    const message = useSelector<AppStoreType>(store => store.auth.message)
    alert(message)
    const dispatch = useDispatch()

    const click = () => {
        dispatch(test('change state'))
    }

    return (
        <>
            <ul className={s.list}>
                <li><NavLink activeClassName={s.active} to={'/login'}>логинизация</NavLink></li>
                <li><NavLink activeClassName={s.active} to={'/registration'}>регистрация</NavLink></li>
                <li><NavLink activeClassName={s.active} to={'/profile'}>профайл</NavLink></li>
                <li><NavLink activeClassName={s.active} to={'/reset-password'}>восстановление пароля</NavLink></li>
                <li><NavLink activeClassName={s.active} to={'/new-password'}>ввод нового пароля</NavLink></li>
                <li><NavLink activeClassName={s.active} to={'/test'}>тестовая</NavLink></li>
                <li><NavLink activeClassName={s.active} to={'/404'}>404</NavLink></li>
            </ul>
            <SuperButton onClick={click}>click to change store</SuperButton>
        </>


    )
}

export default Header