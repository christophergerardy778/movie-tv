import {Component} from '@angular/core';
import {MovieService} from "../../../core/services/movie.service";
import {Observable} from "rxjs";
import {MovieItem} from "../../../models/MovieItem";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  nowPlaying$!: Observable<MovieItem[]>;
  topRated$!: Observable<MovieItem[]>;
  popular$!: Observable<MovieItem[]>;
  tvPopular$!: Observable<MovieItem[]>;

  swiperPlay = {
    delay: 2500,
    disableOnInteraction: false
  };

  breakpoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 18,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },

    1024: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  };

  constructor(private readonly movieService: MovieService) {
    this.topRated$ = this.movieService.getTopPlayed();
    this.nowPlaying$ = this.movieService.getNowPlaying();
    this.popular$ = this.movieService.getPopulars();
    this.tvPopular$ = this.movieService.getTvPopular();
  }
}
