import { createAction, props } from '@ngrx/store';
import { Book } from './book';

export const invokeGETBooksAPI = createAction(
  '[Books API] invoke GET Books API'
);

export const invokeGETBooksAPISuccess = createAction(
  '[Books API] invoke GET Books API Success',
  props<{ allBooks: Book[] }>()
);

export const invokePOSTBooksAPI = createAction(
  '[Books API] invoke POST Books API',
  props<{ newBook: Book }>()
);

export const invokePOSTBooksAPISuccess = createAction(
  '[Books API] invoke POST Books API Success',
  props<{ newBook: Book }>()
);

export const invokeDELETEBooksAPI = createAction(
  '[Books API] invoke DELETE Books API',
  props<{ id: number }>()
);

export const invokeDELETEBooksAPISuccess = createAction(
  '[Books API] invoke DELETE Books API Success',
  props<{ id: number }>()
);

export const invokePATCHBooksAPI = createAction(
  '[Books API] invoke PATCH Books API',
  props<{ id:number,patchDetails: Book }>()
);

export const invokePATCHBooksAPISuccess = createAction(
  '[Books API] invoke PATCH Books API Success',
  props<{ id:number,patchDetails: Book }>()
);
