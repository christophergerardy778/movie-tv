import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../../core/services/movie.service";
import {MovieItem} from "../../../models/MovieItem";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  page = 0;
  isCompleted = false;
  categoryId!: string;
  moviesByCategory: MovieItem[] = [];

  constructor(private readonly movieService: MovieService, private readonly route: ActivatedRoute) {
    this.categoryId = route.snapshot.paramMap.get("id")!;
    this.getMovies();
  }

  ngOnInit(): void {
  }

  getMovies() {
    if (!this.isCompleted) {
      this.movieService.getMoviesByGenrePaginated(this.categoryId, ++this.page)
        .subscribe(result => {
          this.moviesByCategory = this.moviesByCategory.concat(result.results);
          if (result.page === result.total_pages) this.isCompleted = true;
        })
    }
  }

}
