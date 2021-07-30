import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiResponse} from "../../models/ApiResponse";
import {MovieItem} from "../../models/MovieItem";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {Genre, GenreResponse} from "../../models/Genre";

@Injectable()
export class MovieService {

  constructor(private readonly http: HttpClient) { }

  getNowPlaying() {
    return this.http.get<ApiResponse<MovieItem[]>>(`${environment.base_url}/movie/now_playing`, {
      params: {
        page: 1,
        language: 'en-US',
        api_key: environment.api_key
      }
    }).pipe(map(response => response.results.slice(0, 4)));
  }

  getTopPlayed() {
    return this.http.get<ApiResponse<MovieItem[]>>(`${environment.base_url}/movie/top_rated`, {
      params: {
        page: 1,
        language: 'en-US',
        api_key: environment.api_key
      }
    }).pipe(map(response => response.results.slice(0, 3)));
  }

  getPopulars() {
    return this.http.get<ApiResponse<MovieItem[]>>(`${environment.base_url}/movie/popular`, {
      params: {
        page: 1,
        language: 'en-US',
        api_key: environment.api_key
      }
    }).pipe(map(response => response.results.slice(0, 20)));
  }

  getTvPopular() {
    return this.http.get<ApiResponse<MovieItem[]>>(`${environment.base_url}/tv/popular?`, {
      params: {
        page: 1,
        language: 'en-US',
        api_key: environment.api_key
      }
    }).pipe(map(response => response.results.slice(0, 20)))
  }

  getGenres() {
    return this.http.get<GenreResponse>(`${environment.base_url}/genre/movie/list`, {
      params: {
        language: 'en-US',
        api_key: environment.api_key
      }
    }).pipe(map(response => response.genres.slice(0, 10)));
  }

  getByGenreId(genre_id: string) {
    return this.http.get<ApiResponse<MovieItem[]>>(`${environment.base_url}/discover/movie`, {
      params: {
        with_genres: genre_id,
        language: 'en-US',
        api_key: environment.api_key
      }
    }).pipe(map(response => response.results));
  }

}
