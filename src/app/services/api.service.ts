import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Book } from '../models/book.interface';
import { Author } from '../models/author.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  GetBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/book/GetBook?id=${id}`);
  }
  GetAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/book/GetAllBooks`).pipe(
      map((response: Book[]) => {
        return response;
      })
    );
  }
  CreateBook(data: Book): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/book/CreateBook`, data);
  }
  DeleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/book/DeleteBook?id=${id}`);
  }
  UpdateBook(data: Book): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/book/UpdateBook`, data);
  }

  GetAuthor(id: number): Observable<Author> {
    return this.http.get<Author>(`${this.baseUrl}/Author/GetAuthor?id=${id}`);
  }
  GetAllAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.baseUrl}/Author/GetAllAuthors`);
  }
  CreateAuthor(data: Author): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/Author/CreateAuthor`, data);
  }
  DeleteAuthor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/Author/DeleteAuthor?id=${id}`);
  }
  UpdateAuthor(data: Author): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/Author/UpdateAuthor`, data);
  }

  GetCategory(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/Category/GetCategory?id=${id}`);
  }
  GetAllCategoriess(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Category/GetAllCategories`);
  }
  CreateCategory(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/Category/CreateCategory`, data);
  }
  DeleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Category/DeleteCategory?id=${id}`);
  }
  UpdateCategory(data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/Category/UpdateCategory`, data);
  }
}
