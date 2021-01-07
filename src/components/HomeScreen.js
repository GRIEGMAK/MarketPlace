import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./../styles/HomeScreen.module.css"

const HomeScreen = () => {
    return (
        <div>
            <div className={s.homeScreen}>
                <div className={s.logo}>
                    <i><h1>BookStore</h1></i>
                </div>
            </div>
            <div className={s.books}>
                <h2>Перейти к Товару</h2>
                <NavLink to="/books"><button><h3>Перейти к Товару</h3></button></NavLink>
            </div>
            <div className={s.top}>
                <small>Вся информация взята из открытых источников и не нуждается в сертификации
                    и прочих действиях документирования</small>
            </div>
        </div>
    )
}
export default HomeScreen;

