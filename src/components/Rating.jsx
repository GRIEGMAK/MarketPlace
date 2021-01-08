import React from 'react';
import s from './../styles/Rating.module.css'

const Rating = () => {
    return (
        <div className={s.ratingMini}>
            <span className={s.active}></span>
            <span className={s.active}></span>
            <span className={s.active}></span>
            <span></span>
            <span></span>
        </div>
)
}

export default Rating;