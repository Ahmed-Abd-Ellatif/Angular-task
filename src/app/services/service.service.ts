import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todos } from './todos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private _http: HttpClient) {}

  getAllTodos(): Observable<Todos> {
    return this._http.get<Todos>(`${environment.urlPath}?_limit=20`);
  }
  getOneTodo(id: number): Observable<Todos> {
    return this._http.get<Todos>(`${environment.urlPath}/${id}`);
  }
}
