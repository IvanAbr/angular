import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListItemComponent } from './movie-list-item/movie-list-item.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent
  },
  {
    path: 'movie/:id',
    component: MovieListItemComponent
  },
  {
    path: 'movie',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/'
  },
  {
    path: '**',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
