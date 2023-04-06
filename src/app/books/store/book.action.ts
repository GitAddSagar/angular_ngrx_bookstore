import { createAction, props } from '@ngrx/store';
import { Book } from './book';

export const invokeBooksAPI = createAction(
  '[Books API] invoke books fetch API'
);

export const invokeBooksAPISuccess = createAction(
  '[Books API] invoke books fetch API success',
  props<{ allBooks: Book[] }>()
);
