import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { AboutModule } from './modules/about/about.module';
import { BrowseModule } from './modules/browse/browse.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    BrowseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
