import { combineReducers } from 'redux';

import books from './books';
import cart from './cart';
import filter from './filter';
import description from "./description";

export default combineReducers({
  books,
  cart,
  filter,
  description
});
