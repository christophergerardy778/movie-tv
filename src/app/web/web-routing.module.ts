import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./containers/home/home.component";
import {AppLayoutComponent} from "./layout/app-layout/app-layout.component";
import {MovieDetailsComponent} from "./containers/movie-detaills/movie-details.component";
import {TopMoviesComponent} from "./containers/top-movies/top-movies.component";
import {CategoriesComponent} from "./containers/categories/categories.component";

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'movie/:id',
        component: MovieDetailsComponent
      },
      {
        path: 'movies/top-list',
        component: TopMoviesComponent
      },
      {
        path: 'category/:id',
        component: CategoriesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule {}
