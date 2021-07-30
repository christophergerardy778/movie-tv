import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../../core/services/movie.service";
import {Observable} from "rxjs";
import {MovieDetail} from "../../../models/MovieDetail";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie$!: Observable<MovieDetail>;
  movieUrl$!: Observable<string>;

  constructor(private readonly route: ActivatedRoute, private readonly movieService: MovieService) {
    const movie_id = Number.parseInt(this.route.snapshot.paramMap.get("id")!);
    this.movie$ = this.movieService.getMovieById(movie_id);
    this.movieUrl$ = this.movieService.getMovieTrailer(movie_id);
  }

  ngOnInit(): void {
  }

  getStyleBackground(movie: MovieDetail) {
    return `url(${environment.images_url}/${movie.backdrop_path})`
  }

  getImagePoster(movie: MovieDetail) {
    return `${environment.images_url}/${movie.poster_path}`;
  }

}
