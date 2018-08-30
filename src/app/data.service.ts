import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { anime } from './anime';
import { home } from './home';
import { animeById } from './animeById';
import { episodeById } from './episodeById';
export class Anime {
  constructor() { }
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  // implementar el paginado con la url correcta
  getAll(): Observable<anime[]> {
    return this.http.get<anime[]>('http://localhost:8080/v1/animes/')
  }
 
  getAnimeById(id: number | string): Observable<animeById[]>{
    return this.http.get<animeById[]>('http://localhost:8080/v1/animes/'+id)
  }

  getHome(): Observable<home[]> {
    return this.http.get<home[]>('http://localhost:8080/v1/')
  }
  
  //--------episodes----------
  getEpisodeById(id: | string): Observable<episodeById[]>{
    return this.http.get<episodeById[]>('http://localhost:8080/'+id)
  }
  getUniqueEpisode(animeId: number, episodeId: number): Observable<episodeById[]> {
    return this.http.get<episodeById[]>('http://localhost:8080/' + animeId + '/' + episodeId)
  }
 
}
