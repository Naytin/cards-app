import React from "react";
import logo from '../../assets/images/404.jpg';

import { NavLink } from "react-router-dom";
import s from './Error404.module.scss'
import SuperButton from "../../common/c2-SuperButton/SuperButton";


function Error404() {
    return (
        <div className={s.wrapper}>
            <SuperButton ><NavLink to='/profile'>Go to Home</NavLink></SuperButton>
            <img src={logo} alt="404" />
        </div>
    );
}

export default Error404;
