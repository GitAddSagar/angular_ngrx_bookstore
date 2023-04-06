import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BooksService } from '../books.service';
import { invokeBooksAPI, invokeBooksAPISuccess } from './book.action';
import { map, switchMap } from 'rxjs';

@Injectable()
export class BookEffects {
  constructor(private action$: Actions, private bookService: BooksService) {}

  loadAllBooks$ = createEffect(() =>
    this.action$.pipe(
      ofType(invokeBooksAPI),
      switchMap(() => {
        return this.bookService
          .get()
          .pipe(map((data) => invokeBooksAPISuccess({ allBooks: data })));
      })
    )
  );
} 
