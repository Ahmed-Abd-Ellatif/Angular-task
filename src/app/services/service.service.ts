import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private _http: HttpClient) {}

  getAllTodos(): Observable<any> {
    return this._http.get<any>(
      'https://jsonplaceholder.typicode.com/todos?_limit=40'
    );
  }
  getOneTodo(id: any): Observable<any> {
    return this._http.get<any>(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
  }
}
