import React from 'react';
import s from "./../styles/Description.module.css"
import Header from "./Header";
import Top from "./Top";

const Description = (props) => {
    const {book} = props
    const {image, price, rating, title, author, description } = book
    console.log(book)
    return (
        <div>
            <Header />
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
                    Цена: {price}₽
                </div>
                <div className={s.rating}>
                Общая оценка пользователей: {rating}
                </div>
            </div>
            </div>
            <Top />
        </div>
    )
}

export default Description;
