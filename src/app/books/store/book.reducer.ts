import { createReducer, on } from '@ngrx/store';
import { Book } from './book';
import {
  invokeDELETEBooksAPISuccess,
  invokeGETBooksAPISuccess,
  invokePOSTBooksAPISuccess,
} from './book.action';

export const initialState: Book[] = [];

export const bookReducer = createReducer(
  initialState,
  on(invokeGETBooksAPISuccess, (state, { allBooks }) => {
    return allBooks;
  }),
  on(invokePOSTBooksAPISuccess, (state, { newBook }) => {
    alert('Book added successfully');
    return [...state, newBook];
  }),
  on(invokeDELETEBooksAPISuccess, (state, { id }) => {
    alert('Book deleted successfully');
    return state.filter((book) => book.id !== id);
  })
);
