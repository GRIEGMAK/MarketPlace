import React from 'react';

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => {
    return(
        <div>
            <button onClick={() => setFilter('all')}>Все</button>
            <button onClick={() => setFilter('popular')}>Популярность</button>
            <button onClick={() => setFilter('price_high')}>Цены(с дешевых)</button>
            <button onClick={() => setFilter('price_low')}>Цены(с дорогих)</button>
            <button onClick={() => setFilter('author')}>Автор</button>
            <input type="text" placeholder="Искать" onChange={e => setSearchQuery(e.target.value)} value={searchQuery}/>
        </div>
      )
}

export default Filter;
