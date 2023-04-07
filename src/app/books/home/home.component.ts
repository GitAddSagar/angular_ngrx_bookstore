import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectBooks } from '../store/book.selector';
import { invokeDELETEBooksAPI, invokeGETBooksAPI } from '../store/book.action';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store) {}

  books$ = this.store.pipe(select(selectBooks));

  deleteBook(id:number)
  {this.store.dispatch(invokeDELETEBooksAPI({ id }));
    console.log('deleteBook')
  }

  ngOnInit(): void {
   this.store.dispatch(invokeGETBooksAPI())
  }
}
