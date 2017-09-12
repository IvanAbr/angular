import { MoviesService } from './../services/movies.service';
import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'netflix-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {


  constructor(private _ms: MoviesService, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  @Input() get movies() {
    return this._ms.movies;

  }

  public sanitizeImage(image: string) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

}
