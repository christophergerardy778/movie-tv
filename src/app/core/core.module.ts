import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieService} from "./services/movie.service";
import {HttpClientModule} from "@angular/common/http";
import {AveragePipe} from "./pipes/average.pipe";
import { SafeUrlPipe } from './pipes/safe-url.pipe';

@NgModule({
  declarations: [
    AveragePipe,
    SafeUrlPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
    exports: [
        AveragePipe,
        SafeUrlPipe
    ],
  providers: [
    MovieService
  ]
})
export class CoreModule {
}
