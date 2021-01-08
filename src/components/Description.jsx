import React from 'react';
import s from "./../styles/Description.module.css"

const Description = (props) => {
    const {book} = props
    const {image, price, rating, title, author} = book
    console.log(book)
    return (
        <div>
            <div className={s.homeScreen}>
                <div className={s.logo}>
                    <i><h1>BookStore</h1></i>
                </div>
            </div>
            <div className={s.forImageItem}>
                <img src={image} className={s.imageItem}/>
            </div>

        </div>
    )
}

export default Description;
