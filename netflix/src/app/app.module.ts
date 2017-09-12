import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { MoviesService } from './services/movies.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieListItemComponent } from './movie-list-item/movie-list-item.component';
import { SeasonListComponent } from './season-list/season-list.component';
import { SeasonListItemComponent } from './season-list-item/season-list-item.component';
import { AboutComponent } from './about/about.component';

import { HttpModule } from '@angular/http';
import { AboutItemComponent } from './about-item/about-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieListItemComponent,
    SeasonListComponent,
    SeasonListItemComponent,
    AboutComponent,
    AboutItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
