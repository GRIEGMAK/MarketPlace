import React from "react";
import { Popup } from "semantic-ui-react";
import cross from "./../images/cross.jpg"
import s from "../styles/CartComponent.module.css"
import Header from "./Header";

const CartComponent = ({title, id, image, removeFromCart}) => {
    return (<div className={s.textCart}>
            <img className={s.imageItem} src={image}/>
            {title}
            <a onClick={() => removeFromCart(id)} background-color="red">
                <img className={s.crossCart} src={cross}/>
            </a>
        </div>
    )
}

const MenuComponent = ({totalPrice, count, items}) => {
    return (
        <div>
            <Header />
            <div className={s.header}>
            Итого: {totalPrice} ₽ &nbsp;
            <Popup
                trigger={
                    <div>
                        Корзина (<b>{count}</b>)
                    </div>
                }
                content={items.map(book => (
                    <CartComponent {...book} />
                ))}
                on="click"
                hideOnScroll
            />
        </div></div>
    )
}

export default MenuComponent;
