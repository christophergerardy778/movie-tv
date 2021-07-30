import {Component} from '@angular/core';
import {MovieService} from "../../../core/services/movie.service";
import {from, Observable, Observer} from "rxjs";
import {MovieItem} from "../../../models/MovieItem";
import {Genre} from "../../../models/Genre";
import {map} from "rxjs/operators";

interface TabContent {
  tabs: TabItem[];
}

interface TabItem {
  tab: Genre,
  movies: MovieItem[]
}

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

  tabContent: TabContent  = {
    tabs: []
  }

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

    this.movieService.getGenres()
      .subscribe(genres => {
        for (let i = 0; i < genres.length ; i++) {
          this.movieService.getByGenreId(genres[i].id)
            .subscribe(movies => {
              this.tabContent.tabs.push({
                tab: genres[i],
                movies: movies.slice(0, 12)
              });
            });
        }
      });
  }

}
