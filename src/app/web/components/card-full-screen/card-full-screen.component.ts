import {Component, Input, OnInit} from '@angular/core';
import {MovieItem} from "../../../models/MovieItem";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-card-full-screen',
  templateUrl: './card-full-screen.component.html',
  styleUrls: ['./card-full-screen.component.scss']
})
export class CardFullScreenComponent implements OnInit {

  @Input()
  movie!: MovieItem;

  constructor() { }

  ngOnInit(): void {
  }

  getStyleBackground() {
    return `url(${environment.images_url}/${this.movie.backdrop_path})`
  }

}
