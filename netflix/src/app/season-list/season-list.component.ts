import { Component, OnInit } from '@angular/core';
 // import { MoviesService } from "../services/movies.service";

@Component({
  selector:'netflix-season-list',
  templateUrl: './season-list.component.html',
  styleUrls: ['./season-list.component.scss']
})

export  class SeasonListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 // constructor(private _moviesService: MoviesService, private _route: ActivatedRoute, private _sanitizer: DomSanitizer) { }

}
