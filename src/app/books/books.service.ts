import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './store/book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Book[]>('http://localhost:8080/books');
  }

  post(newBook: Book) {
    return this.http.post<Book>('http://localhost:8080/books', {
      ...newBook,
    });
  }

  delete(id: number) {
    return this.http.delete<Book>(`http://localhost:8080/books/${id}`);
  }

  patch(id:number,patchDetails: Book) {
    return this.http.patch<Book>(`http://localhost:8080/books/${id}`, {
      ...patchDetails,
    });
  }
}
