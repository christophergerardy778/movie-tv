import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../../core/services/movie.service";
import {MovieItem} from "../../../models/MovieItem";

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.scss']
})
export class TopMoviesComponent implements OnInit {

  page = 0;
  isCompleted = false;
  movies: MovieItem[] = [];

  constructor(private readonly movieService: MovieService) {
    this.getMovies();
  }

  ngOnInit(): void {
  }

  getMovies() {
    if (!this.isCompleted) {
      this.movieService.getTopMoviesPaginated(++this.page)
        .subscribe(data => {
          this.movies = this.movies.concat(data.results);
          if (data.page === data.total_pages) this.isCompleted = true;
        });
    }
  }
}
