import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { AboutComponent } from './modules/about/pages/about/about.component';
import { BrowseComponent } from './modules/browse/pages/browse/browse.component';
import { RecipeThumbComponent } from './components/recipe-thumb/recipe-thumb.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BrowseComponent,
    RecipeThumbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
