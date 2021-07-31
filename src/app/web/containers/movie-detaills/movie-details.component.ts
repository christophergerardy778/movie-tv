import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../../core/services/movie.service";
import {Observable} from "rxjs";
import {MovieDetail} from "../../../models/MovieDetail";
import {environment} from "../../../../environments/environment";
import {Cast} from "../../../models/Cast";
import {MovieItem} from "../../../models/MovieItem";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie$!: Observable<MovieDetail>;
  movieUrl$!: Observable<string>;
  cast$!: Observable<Cast[]>;
  recommendations$!: Observable<MovieItem[]>;

  breakpoints = {
    640: {
      slidesPerView: 4,
      spaceBetween: 18,
    },

    768: {
      slidesPerView: 6,
      spaceBetween: 18,
    },

    1024: {
      slidesPerView: 8,
      spaceBetween: 20,
    },
  };

  constructor(private readonly route: ActivatedRoute, private readonly movieService: MovieService) {
    this.route.params.subscribe(params => {
      const movie_id = Number.parseInt(params["id"]);
      this.movie$ = this.movieService.getMovieById(movie_id);
      this.movieUrl$ = this.movieService.getMovieTrailer(movie_id);
      this.cast$ = this.movieService.getCasts(movie_id);
      this.recommendations$ = this.movieService.getRecommendations(movie_id);
    });
  }

  ngOnInit(): void {
  }

  getStyleBackground(movie: MovieDetail) {
    return `url(${environment.images_url}/${movie.backdrop_path})`
  }

  getImagePoster(movie: MovieDetail) {
    return `${environment.images_url}${movie.poster_path}`;
  }

  getImageCast(cast: Cast) {
    return `${environment.images_url}${cast.profile_path}`;
  }

}
