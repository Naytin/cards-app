import React from "react";
import logo from '../../assets/images/404.jpg';

import { NavLink } from "react-router-dom";
import s from './Error404.module.scss'


function Error404() {
    return (
        <div className={s.wrapper}>
            <NavLink className={s.link} to='/profile'>Go to Home</NavLink>
            <img src={logo} alt="404" />
        </div>
    );
}

export default Error404;
