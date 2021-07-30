import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./containers/home/home.component";
import {AppLayoutComponent} from "./layout/app-layout/app-layout.component";
import {MovieDetailsComponent} from "./containers/movie-detaills/movie-details.component";

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule {}
