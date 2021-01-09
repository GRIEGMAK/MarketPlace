import React from "react";
import {Popup} from "semantic-ui-react";
import cross from "./../images/cross.jpg"
import s from "../styles/Menu.module.css"
import Header from "./Header";

const CartComponent = ({title, id, image, removeFromCart}) => {
    return (<div className={s.textCart}>
            <div>
                <img className={s.imageItem} src={image}/>
            </div>
            <div className={s.titleCart}>
                {title}
            </div>
            <div className={s.crossCart}>
                <a onClick={() => removeFromCart(id)} background-color="red">
                    <img className={s.crossCart} src={cross}/>
                </a>
            </div>
        </div>
    )
}

const MenuComponent = ({totalPrice, count, items}) => {
    return (
        <div>
            <div className={s.header}>
                Итого: {totalPrice} ₽ &nbsp;
                <Popup
                    trigger={
                        <div>
                            <button>Корзина (<b>{count}</b>)</button>
                        </div>
                    }
                    content={items.map(book => (
                        <CartComponent {...book} />
                    ))}
                    on="click"
                    hideOnScroll
                />
            </div>
        </div>
    )
}

export default MenuComponent;
