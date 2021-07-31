import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from './components/shared/navigation/navigation.component';
import {HomeComponent} from './containers/home/home.component';
import {WebRoutingModule} from "./web-routing.module";
import {AppLayoutComponent} from './layout/app-layout/app-layout.component';
import {MaterialModule} from "../material/material.module";
import {CardFullScreenComponent} from './components/card-full-screen/card-full-screen.component';
import {CardMovieComponent} from './components/card-movie/card-movie.component';
import {SwiperModule} from "swiper/angular";
import {FooterMovieComponent} from './components/shared/footer-movie/footer-movie.component';
import {CoreModule} from "../core/core.module";
import {TextSliceBigPipe} from '../core/pipes/text-slice-big.pipe';
import {TextSlicePipe} from '../core/pipes/text-slice.pipe';
import {TitleSlicePipe} from '../core/pipes/title-slice.pipe';
import {MovieDetailsComponent} from './containers/movie-detaills/movie-details.component';
import {TopMoviesComponent} from './containers/top-movies/top-movies.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";

@NgModule({
  declarations: [
    NavigationComponent,
    HomeComponent,
    AppLayoutComponent,
    CardFullScreenComponent,
    CardMovieComponent,
    FooterMovieComponent,
    TextSliceBigPipe,
    TextSlicePipe,
    TitleSlicePipe,
    MovieDetailsComponent,
    TopMoviesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    WebRoutingModule,
    SwiperModule,
    CoreModule,
    InfiniteScrollModule
  ]
})
export class WebModule {
}
