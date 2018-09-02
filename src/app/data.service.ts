import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { anime } from './anime';
import { home } from './home';
import { animeById } from './animeById';
import { episodeById } from './episodeById';
export class Anime {
  constructor() { }
}
=======
import { Anime } from './Anime';
import { home } from './home';
import { AnimeById } from './animeById';
import { EpisodeById } from './episodeById';
>>>>>>> initial commit
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  // implementar el paginado con la url correcta
<<<<<<< HEAD
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
 
=======
  getAll(): Observable<Anime[]> {
    return this.http.get<Anime[]>('http://localhost:8080/v1/animes/');
  }

  getAnimeById(id: number | string): Observable<AnimeById[]> {
    return this.http.get<AnimeById[]>('http://localhost:8080/v1/animes/' + id);
  }

  getHome(): Observable<home[]> {
    return this.http.get<home[]>('http://localhost:8080/v1/');
  }

  // --------episodes----------
  // produce duplicado si el updatedate es el mismo
  // trae los episodios de un anime
  getEpisodeById(id: | string): Observable<EpisodeById[]> {
    return this.http.get<EpisodeById[]>('http://localhost:8080/' + id);
  }
  getUniqueEpisode(animeId: number, episodeId: number): Observable<EpisodeById[]> {
    return this.http.get<EpisodeById[]>('http://localhost:8080/' + animeId + '/' + episodeId);
  }

>>>>>>> initial commit
}
