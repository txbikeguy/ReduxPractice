import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  // this reducer is adding a key named "books" to our global application state,
  // that key equals "BooksReducer", which comes from reducer_books.js 
  // and is an array of books! 
  books: BooksReducer
});

export default rootReducer;
