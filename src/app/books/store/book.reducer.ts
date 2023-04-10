import { createReducer, on } from '@ngrx/store';
import { Book } from './book';
import {
  invokeDELETEBooksAPI,
  invokeDELETEBooksAPISuccess,
  invokeGETBooksAPISuccess,
  invokePATCHBooksAPI,
  invokePATCHBooksAPISuccess,
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
  on(invokePATCHBooksAPI, (state, { id }) => {
    return state.map((book) => {
      if (book.id === id) {
        return { ...book, title: 'Title has been updated' };
      }
      return book;
    });
  }),
  on(invokePATCHBooksAPISuccess, (state, { id }) => {
    alert('Book edited successfully');
    return state;
  }),
  on(invokeDELETEBooksAPI, (state, { id }) => {
    return state.filter((book) => book.id !== id);
  }),
  on(invokeDELETEBooksAPISuccess, (state, { id }) => {
    alert('Book deleted successfully');
    return state;
  })
);
