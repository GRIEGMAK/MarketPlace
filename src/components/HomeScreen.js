import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./../styles/HomeScreen.module.css"
import Header from "./Header";
import Top from "./Top";

const HomeScreen = () => {
    return (
        <div>
            <Header/>
            <div className={s.books}>
                <i><h1>BookStore</h1></i>
                <NavLink to="/books">
                    <button><h3>Перейти к Товару</h3></button>
                </NavLink>
            </div>
            <Top />
        </div>
    )
}
export default HomeScreen;

