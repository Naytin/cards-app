import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.scss'
import {PATH} from "../routes/Routes";

const initialState = [
    {link: PATH.LOGIN, active: true},
    {link: PATH.REGISTRATION, active: false},
    {link: PATH.PROFILE, active: false},
    {link: PATH.RESET_PASSWORD, active: false},
    {link: PATH.NEW_PASSWORD, active: false},
    {link: PATH.TEST, active: false},
]

const Header = () => {

    const link = initialState.map((l, i) => {
        return <li key={i}><NavLink activeClassName={s.active} to={l.link}>{l.link.slice(1)}</NavLink></li>
    })

    return (
        <div className={s.wrapper}>
            <h3 className={s.title}>CARDS APP</h3>
            <ul className={s.list}>
                {link}
            </ul>
        </div>
    )
}

export default Header