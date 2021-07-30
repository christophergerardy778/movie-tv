import {Component, Input, OnInit} from '@angular/core';
import {MovieItem} from "../../../models/MovieItem";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent implements OnInit {

  @Input()
  movie!: MovieItem;

  constructor() { }

  ngOnInit(): void {
  }

  getStyleBackground() {
    return `url(${environment.images_url}/${this.movie.backdrop_path})`
  }

}
