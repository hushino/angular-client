import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Anime } from './Anime';
import { Home } from './home';
import { AnimeById } from './animeById';
import { EpisodeById } from './episodeById';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  // implementar el paginado con la url correcta
  getAll(): Observable<Anime[]> {
    return this.http.get<Anime[]>('http://localhost:8080/v1/animes/');
  }

  getAnimeById(id: number | string): Observable<AnimeById[]> {
    return this.http.get<AnimeById[]>('http://localhost:8080/v1/animes/' + id);
  }

  getHome(): Observable<Home[]> {
    return this.http.get<Home[]>('http://localhost:8080/v1/');
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

}
