import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from './components/shared/navigation/navigation.component';
import {HomeComponent} from './containers/home/home.component';
import {WebRoutingModule} from "./web-routing.module";
import {AppLayoutComponent} from './layout/app-layout/app-layout.component';
import {MaterialModule} from "../material/material.module";
import {CardFullScreenComponent} from './components/card-full-screen/card-full-screen.component';

@NgModule({
  declarations: [
    NavigationComponent,
    HomeComponent,
    AppLayoutComponent,
    CardFullScreenComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    WebRoutingModule
  ]
})
export class WebModule {
}
