import React from 'react';
import s from "./../styles/BooksCard.module.css"
import ImageCard from "./ImageCard";
import Cart from './../images/Cart.jpg'
import {NavLink} from "react-router-dom";

const BookCard = book => {
    const {id, title, author, price, rating, image, addToCart, addedCount, setCardId, setBookCard} = book;
    const setBookCardId = (book) => {
        setBookCard(book)
        setCardId(id)
    }
    return (
        <div className={s.linkCard}>
            <div className={s.titleBooks}>
                <i>{title}</i>
            </div>
            <div className={s.descBooks}>
                <small><i>— {author}</i></small>
                <ImageCard image={image}/>
                <div className={s.imgStyles}>Цена: {price}₽
                    <div className={s.cAddToCart}>
                        <a onClick={() => addToCart(book)}>
                            <img src={Cart}/>{addedCount > 0 && `(${addedCount})`}
                        </a>
                    </div>
                </div>
                <div>Оценка: {rating}</div>
                <NavLink to={"/books/" + id}>
                    <button onClick={() => setBookCardId(book)}>
                        Подробнее
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default BookCard;
