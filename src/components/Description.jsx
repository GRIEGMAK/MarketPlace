import React from 'react';
import s from "./../styles/Description.module.css"
import cross from "./../images/cross.jpg"
import {NavLink} from "react-router-dom";

const Description = (props) => {
    const {book} = props
    const {image, price, rating, title, author, description, addToCart, addedCount } = book
    console.log(book)
    return (
        <div>
            <NavLink to="/books/"><img className={s.cross} src={cross}/></NavLink>
            <hr/>
            <div className={s.containerItems}>
            <div className={s.forImageItem}>
                <img src={image} className={s.imageItem}/>
            </div>
            <div className={s.items}>
                <h1>{title}</h1>
                <i><small>— {author}</small></i>
                <h3> Описание книги:</h3>
                <div className={s.contDesc}>
                    {description}
                </div>
                <div className={s.price}>
                    Цена: {price}₽ <button onClick={() => addToCart(book)}>Добавить в корзину {addedCount > 0 && `(${addedCount})`}</button>
                </div>
                <div className={s.rating}>
                Общая оценка пользователей: {rating}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Description;
