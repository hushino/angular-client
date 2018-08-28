import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { anime } from './anime';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  getAll(): Observable<anime[]>{
    return this.http.get<anime[]>('http://localhost:8080/v1/animes/1')
  }
}
