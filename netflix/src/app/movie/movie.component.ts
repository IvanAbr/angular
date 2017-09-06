import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { MoviesService } from "../services/movies.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'netflix-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {

  private _idSubscription: Subscription;
  public movie: any;
  public summary: any;
  
  private _movieSubscription: Subscription;
  private seasons: any[] = [
    {
       "id":1,
       "url":"http://www.tvmaze.com/seasons/1/under-the-dome-season-1",
       "number":1,
       "name":"",
       "episodeOrder":13,
       "premiereDate":"2013-06-24",
       "endDate":"2013-09-16",
       "network":{
          "id":2,
          "name":"CBS",
          "country":{
             "name":"United States",
             "code":"US",
             "timezone":"America/New_York"
          }
       },
       "webChannel":null,
       "image":{
          "medium":"http://static.tvmaze.com/uploads/images/medium_portrait/24/60941.jpg",
          "original":"http://static.tvmaze.com/uploads/images/original_untouched/24/60941.jpg"
       },
       "summary":"",
       "_links":{
          "self":{
             "href":"http://api.tvmaze.com/seasons/1"
          }
       }
    },
    {
       "id":2,
       "url":"http://www.tvmaze.com/seasons/2/under-the-dome-season-2",
       "number":2,
       "name":"",
       "episodeOrder":13,
       "premiereDate":"2014-06-30",
       "endDate":"2014-09-22",
       "network":{
          "id":2,
          "name":"CBS",
          "country":{
             "name":"United States",
             "code":"US",
             "timezone":"America/New_York"
          }
       },
       "webChannel":null,
       "image":{
          "medium":"http://static.tvmaze.com/uploads/images/medium_portrait/24/60942.jpg",
          "original":"http://static.tvmaze.com/uploads/images/original_untouched/24/60942.jpg"
       },
       "summary":"",
       "_links":{
          "self":{
             "href":"http://api.tvmaze.com/seasons/2"
          }
       }
    },
    {
       "id":6233,
       "url":"http://www.tvmaze.com/seasons/6233/under-the-dome-season-3",
       "number":3,
       "name":"",
       "episodeOrder":13,
       "premiereDate":"2015-06-25",
       "endDate":"2015-09-10",
       "network":{
          "id":2,
          "name":"CBS",
          "country":{
             "name":"United States",
             "code":"US",
             "timezone":"America/New_York"
          }
       },
       "webChannel":null,
       "image":null,
       "summary":"",
       "_links":{
          "self":{
             "href":"http://api.tvmaze.com/seasons/6233"
          }
       }
    }
 ];

  constructor(private _moviesService: MoviesService, private _route: ActivatedRoute, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this._idSubscription = this._route.params.subscribe((params: any) => {
      this._movieSubscription = this._moviesService.queryMovie(params.id).subscribe((movie: any) => {
        this.movie = movie;
        this.summary = this._sanitizer.bypassSecurityTrustHtml(movie.show.summary);
      });
    });
  }

  ngOnDestroy() {
    this._idSubscription.unsubscribe();
    if (this._movieSubscription) { this._movieSubscription.unsubscribe; }
  }

  public sanitizeImage(image: string) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

}
