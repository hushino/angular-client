import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { anime } from './anime';
import { home } from './home';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<anime[]> {
    return this.http.get<anime[]>('http://localhost:8080/v1/animes/1')
  }

  getHome(): Observable<home[]> {
    return this.http.get<home[]>('http://localhost:8080/v1/')
  }
}
