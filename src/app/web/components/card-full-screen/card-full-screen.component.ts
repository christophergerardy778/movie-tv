import {Component, Input, OnInit} from '@angular/core';
import {MovieItem} from "../../../models/MovieItem";
import {environment} from "../../../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-full-screen',
  templateUrl: './card-full-screen.component.html',
  styleUrls: ['./card-full-screen.component.scss']
})
export class CardFullScreenComponent implements OnInit {

  @Input()
  movie!: MovieItem;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  getStyleBackground() {
    return `url(${environment.images_url}/${this.movie.backdrop_path})`
  }

  showDetails() {
    return this.router.navigate(["movie/", this.movie.id])
  }
}
