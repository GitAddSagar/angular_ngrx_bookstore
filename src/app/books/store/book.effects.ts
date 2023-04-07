import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BooksService } from '../books.service';
import {
  invokeDELETEBooksAPI,
  invokeDELETEBooksAPISuccess,
  invokeGETBooksAPI,
  invokeGETBooksAPISuccess,
  invokePOSTBooksAPI,
  invokePOSTBooksAPISuccess,
} from './book.action';
import { map, switchMap } from 'rxjs';
import { Book } from './book';

@Injectable()
export class BookEffects {
  constructor(private action$: Actions, private bookService: BooksService) {}

  loadAllBooks$ = createEffect(() =>
    this.action$.pipe(
      ofType(invokeGETBooksAPI),
      switchMap(() => {
        return this.bookService
          .get()
          .pipe(map((data) => invokeGETBooksAPISuccess({ allBooks: data })));
      })
    )
  );

  postNewBook$ = createEffect(() =>
    this.action$.pipe(
      ofType(invokePOSTBooksAPI),
      switchMap((action) => {
        return this.bookService
          .post(action.newBook)
          .pipe(
            map((data: Book) => invokePOSTBooksAPISuccess({ newBook: data }))
          );
      })
    )
  );

  deleteBook$ = createEffect(() =>
    this.action$.pipe(
      ofType(invokeDELETEBooksAPI),
      switchMap((action) => {
        return this.bookService
          .delete(action.id)
          .pipe(
            map((data: Book) => invokeDELETEBooksAPISuccess({ id: data.id }))
          );
      })
    )
  );
}
