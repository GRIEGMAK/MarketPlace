import React from "react"
import s from "./../styles/Header.module.css"

const Header = () => {
    return (
            <div className={s.header}>
                <div className={s.logo}>
                    <i><h1>BookStore</h1></i>
                </div>
            </div>
    )
};
export default Header;
