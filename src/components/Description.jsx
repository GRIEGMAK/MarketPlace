import React from 'react';
import s from "./../styles/Description.module.css"

const Description = (props) => {
    const {book} = props
    const {image, price, rating, title, author} = book
    console.log(book)
    return (
        <div className={s.containerItem}>
            <div className={s.homeScreen}>
                <div className={s.logo}>
                    <i><h1>BookStore</h1></i>
                </div>
            </div>
            <div className={s.forImageItem}>
                <img src={image} className={s.imageItem}/>
            </div>
            <div>
                <h1>{title}</h1>
                <i><small>— {author}</small></i>
            </div>
            <Rating />
        </div>
    )
}

export default Description;
