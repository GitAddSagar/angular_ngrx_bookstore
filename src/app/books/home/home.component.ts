import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectBooks } from '../store/book.selector';
import {
  invokeDELETEBooksAPI,
  invokeGETBooksAPI,
  invokePATCHBooksAPI,
} from '../store/book.action';
import { Book } from '../store/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store) {}

  books$ = this.store.pipe(select(selectBooks));

  editBook(id: number) {
    const patchDetails = {
      id,
      title: 'Changed Title',
      author: 'Changed Author',
      price: 100,
    };
    this.store.dispatch(invokePATCHBooksAPI({ id, patchDetails }));
    console.log('editBook');
  }

  deleteBook(id: number) {
    this.store.dispatch(invokeDELETEBooksAPI({ id }));
    console.log('deleteBook');
  }

  ngOnInit(): void {
    this.store.dispatch(invokeGETBooksAPI());
  }
}
