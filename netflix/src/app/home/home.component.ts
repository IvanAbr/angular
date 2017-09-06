import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'netflix-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _ms: MoviesService, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  get movies() {
    return this._ms.movies;
  }

  public sanitizeImage(image: string) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

}
