import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieService} from "./services/movie.service";
import {HttpClientModule} from "@angular/common/http";
import {AveragePipe} from "./pipes/average.pipe";

@NgModule({
  declarations: [
    AveragePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    AveragePipe
  ],
  providers: [
    MovieService
  ]
})
export class CoreModule {
}
