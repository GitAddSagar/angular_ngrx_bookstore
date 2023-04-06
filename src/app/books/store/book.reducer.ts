import { createReducer, on } from '@ngrx/store';
import { Book } from './book';
import { invokeBooksAPISuccess } from './book.action';

export const initialState: Book[] = [];

export const bookReducer = createReducer(
  initialState,
  on(invokeBooksAPISuccess, (state, { allBooks }) => {
    return allBooks;
  })
);
