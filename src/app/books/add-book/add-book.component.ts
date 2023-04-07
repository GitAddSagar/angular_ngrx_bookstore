import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { invokePOSTBooksAPI } from '../store/book.action';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent {
  constructor(private store: Store) {}

  addBook() {
    const id:number = Math.floor(Math.random() * 1000) + 1;

    const newBook = {
      id,
      title: `${id} years in a Decade`,
      author: 'Shah Rukh Khan',
      price: id,
    };

    this.store.dispatch(invokePOSTBooksAPI({ newBook }));
  }
}
