import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './store/book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Book[]>('https://data-vercel.vercel.app/books');
  }

  post(newBook: Book) {
    return this.http.post<Book>('https://data-vercel.vercel.app/books', {
      ...newBook,
    });
  }

  delete(id: number) {
    return this.http.delete<Book>(`https://data-vercel.vercel.app/books/${id}`);
  }

  patch(id:number,patchDetails: Book) {
    return this.http.patch<Book>(`https://data-vercel.vercel.app/books/${id}`, {
      ...patchDetails,
    });
  }
}
