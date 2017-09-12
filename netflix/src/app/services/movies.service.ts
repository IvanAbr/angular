import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Http,
  Request,
  Response,
  RequestOptions,
  RequestMethod,
  Headers,
  URLSearchParams } from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {
  private baseurl: string;
  private _movies: Observable<any[]>;
  constructor(private http: Http) {
    this.baseurl = 'http://api.tvmaze.com';
    this._movies = this._fetchMovies();
  }

  get movies(): Observable<any[]> {
    return this._movies;
  }

  public queryMovie(id: string) {
    let requestOptions: RequestOptions = new RequestOptions(),
      request: Request,
      urlParams: URLSearchParams = new URLSearchParams(),
      headers: Headers = new Headers();
    let url = `${this.baseurl}/shows/${id}`;
    urlParams.set('query','Bad');

    requestOptions.url = url;
    requestOptions.headers = headers;
    requestOptions.method = RequestMethod.Get;
    requestOptions.params = urlParams;
    request = new Request(requestOptions);

    return this.http.request(request)
      .map((response: Response)=>response.json())
      .map((movie: any)=> {
        console.log(movie);
        return movie;
      })
  }

  public _fetchMovies(): Observable<any[]> {
    return Observable.of([
      {
         "score":17.007687,
         "show":{
            "id":169,
            "url":"http://www.tvmaze.com/shows/169/breaking-bad",
            "name":"Breaking Bad",
            "type":"Scripted",
            "language":"English",
            "genres":[
               "Drama",
               "Crime",
               "Thriller"
            ],
            "status":"Ended",
            "runtime":60,
            "premiered":"2008-01-20",
            "officialSite":"http://www.amc.com/shows/breaking-bad",
            "schedule":{
               "time":"22:00",
               "days":[
                  "Sunday"
               ]
            },
            "rating":{
               "average":9.3
            },
            "weight":97,
            "network":{
               "id":20,
               "name":"AMC",
               "country":{
                  "name":"United States",
                  "code":"US",
                  "timezone":"America/New_York"
               }
            },
            "webChannel":null,
            "externals":{
               "tvrage":18164,
               "thetvdb":81189,
               "imdb":"tt0903747"
            },
            "image":{
               "medium":"http://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg",
               "original":"http://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg"
            },
            "summary":"<p><b>Breaking Bad</b> follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family's financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in this world. The series explores how a fatal diagnosis such as White's releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.</p>",
            "updated":1502331382,
            "_links":{
               "self":{
                  "href":"http://api.tvmaze.com/shows/169"
               },
               "previousepisode":{
                  "href":"http://api.tvmaze.com/episodes/12253"
               }
            }
         }
      },
      {
         "score":15.618976,
         "show":{
            "id":510,
            "url":"http://www.tvmaze.com/shows/510/breaking-in",
            "name":"Breaking In",
            "type":"Scripted",
            "language":"English",
            "genres":[
               "Comedy",
               "Action",
               "Crime"
            ],
            "status":"Ended",
            "runtime":30,
            "premiered":"2011-04-06",
            "officialSite":"https://web.archive.org/web/20120701202417/http://www.fox.com/breakingin/",
            "schedule":{
               "time":"21:30",
               "days":[
                  "Wednesday"
               ]
            },
            "rating":{
               "average":7.9
            },
            "weight":71,
            "network":{
               "id":4,
               "name":"FOX",
               "country":{
                  "name":"United States",
                  "code":"US",
                  "timezone":"America/New_York"
               }
            },
            "webChannel":null,
            "externals":{
               "tvrage":26082,
               "thetvdb":206751,
               "imdb":"tt1630574"
            },
            "image":{
               "medium":"http://static.tvmaze.com/uploads/images/medium_portrait/8/22035.jpg",
               "original":"http://static.tvmaze.com/uploads/images/original_untouched/8/22035.jpg"
            },
            "summary":"<p>Contra Security, a high-tech security firm that takes extreme - and often questionable - measures to sell its protection services is corporate America's answer to \"The A-Team\", giving clients a sense of security by first ripping it away. In the opener, Contra's man of mystery owner, Oz, blackmails his newest recruit, computer hacker Cameron, to join his team. Cameron quickly learns that cracking into state-of-the-art security systems is a lot easier than dealing with his co-workers, including the alluring Melanie, prank-pulling Cash and competitive Josh.</p>",
            "updated":1492623513,
            "_links":{
               "self":{
                  "href":"http://api.tvmaze.com/shows/510"
               },
               "previousepisode":{
                  "href":"http://api.tvmaze.com/episodes/46349"
               }
            }
         }
      },
      {
         "score":14.18664,
         "show":{
            "id":8525,
            "url":"http://www.tvmaze.com/shows/8525/breaking-genres",
            "name":"Breaking Genres",
            "type":"Documentary",
            "language":"English",
            "genres":[
               "Music"
            ],
            "status":"To Be Determined",
            "runtime":30,
            "premiered":"2015-11-16",
            "officialSite":"https://revolt.tv/video/revolt-news-announces-breaking-genres-docuseries",
            "schedule":{
               "time":"20:00",
               "days":[
                  "Monday"
               ]
            },
            "rating":{
               "average":null
            },
            "weight":0,
            "network":{
               "id":520,
               "name":"REVOLT",
               "country":{
                  "name":"United States",
                  "code":"US",
                  "timezone":"America/New_York"
               }
            },
            "webChannel":null,
            "externals":{
               "tvrage":null,
               "thetvdb":null,
               "imdb":null
            },
            "image":{
               "medium":"http://static.tvmaze.com/uploads/images/medium_portrait/102/255776.jpg",
               "original":"http://static.tvmaze.com/uploads/images/original_untouched/102/255776.jpg"
            },
            "summary":"<p>Genres have existed nearly as long as music itself. Labeling. Categorizing. These are deeply human activities, rooted in behavioral evolution and survival, so it is no surprise that people have been instinctually compelled to do it to what they hear. There have been benefits: Labeling music has made it easier to talk about, and to sell. But dividing music has also divided people. And while it may be human nature to categorize, it is also human nature to combine, to merge, to collaborate, and adulterate. The times are changing: We exist in a moment where it's no longer incumbent upon you to choose a genre, to pick a side, to belong to just one culture. You are free to be you and to traverse lines that are blurred and borders that are broken, thanks to some radical ideas, and actors, who have changed the game. The only gatekeeper to you enjoying a style of music, is you. And REVOLT TV exists to reflect that vision, and feed that appetite.</p><p>Since the launch of our network, we have spoken with artists of all walks about the past, present, and future of genres: Why they exist, who they have served, and where they're headed. And beginning this coming Monday, we are proud to bring this long-gestating project to you. On November 16th, REVOLT TV premieres a new series titled <b>Breaking Genres</b>. Over the course of five episodes this fall, we frame, foment, and stoke a conversation on the state of genre-based thinking in music, incorporating exclusive interviews with pioneers of the movements like Rick Rubin, Chuck D, Erykah Badu, Travis Barker, Nas, Common, The Clash's Mick Jones and Paul Simonen, super producers Ariel Rechtshaid and Diplo, Amber Coffman, Animal Collective's Avey Tare, and so many more, as we tackle the pivotal cultural moments, the social figures, and the technological and socio-political movements that have altered the course of what was once a stifled and strict space of aesthetic restriction, but is now a landscape where the old rules have been shattered, and new rules rule.</p>",
            "updated":1502216324,
            "_links":{
               "self":{
                  "href":"http://api.tvmaze.com/shows/8525"
               },
               "previousepisode":{
                  "href":"http://api.tvmaze.com/episodes/532048"
               }
            }
         }
      },
      {
         "score":13.449785,
         "show":{
            "id":31112,
            "url":"http://www.tvmaze.com/shows/31112/breaking-bass",
            "name":"Breaking Bass",
            "type":"Reality",
            "language":"English",
            "genres":[

            ],
            "status":"In Development",
            "runtime":11,
            "premiered":"2017-08-15",
            "officialSite":null,
            "schedule":{
               "time":"",
               "days":[

               ]
            },
            "rating":{
               "average":null
            },
            "weight":87,
            "network":null,
            "webChannel":{
               "id":85,
               "name":"go90",
               "country":{
                  "name":"United States",
                  "code":"US",
                  "timezone":"America/New_York"
               }
            },
            "externals":{
               "tvrage":null,
               "thetvdb":null,
               "imdb":null
            },
            "image":null,
            "summary":"<p>Two young fishermen explore lake towns around the country on a quest for the biggest bass they can find.</p>",
            "updated":1502533805,
            "_links":{
               "self":{
                  "href":"http://api.tvmaze.com/shows/31112"
               },
               "previousepisode":{
                  "href":"http://api.tvmaze.com/episodes/1273189"
               }
            }
         }
      },
      {
         "score":12.019697,
         "show":{
            "id":21504,
            "url":"http://www.tvmaze.com/shows/21504/breaking-down-the-bars",
            "name":"Breaking Down the Bars",
            "type":"Documentary",
            "language":"English",
            "genres":[

            ],
            "status":"Ended",
            "runtime":60,
            "premiered":"2011-02-15",
            "officialSite":null,
            "schedule":{
               "time":"21:00",
               "days":[
                  "Wednesday"
               ]
            },
            "rating":{
               "average":null
            },
            "weight":55,
            "network":{
               "id":236,
               "name":"Oprah Winfrey Network",
               "country":{
                  "name":"United States",
                  "code":"US",
                  "timezone":"America/New_York"
               }
            },
            "webChannel":null,
            "externals":{
               "tvrage":null,
               "thetvdb":249707,
               "imdb":"tt1595861"
            },
            "image":{
               "medium":"http://static.tvmaze.com/uploads/images/medium_portrait/76/191518.jpg",
               "original":"http://static.tvmaze.com/uploads/images/original_untouched/76/191518.jpg"
            },
            "summary":"<p><b>Breaking Down the Bars </b>follows the dramatic transformation of a group of female prisoners during their time at the Rockville Correctional Facility in Indiana. With the help of therapist Dr. Stephanie Covington, the series documents the heart-wrenching journeys of these women as they take the steps needed to reach their personal goals. This program will also reveal the stories of the families of these women as they wrestle with the reevaluation of their lives due to the incarceration of a loved one.</p>",
            "updated":1477801571,
            "_links":{
               "self":{
                  "href":"http://api.tvmaze.com/shows/21504"
               },
               "previousepisode":{
                  "href":"http://api.tvmaze.com/episodes/940490"
               }
            }
         }
      },
      {
         "score":11.214653,
         "show":{
            "id":19991,
            "url":"http://www.tvmaze.com/shows/19991/couple-breaking",
            "name":"Couple Breaking",
            "type":"Scripted",
            "language":"Korean",
            "genres":[
               "Drama",
               "Romance"
            ],
            "status":"Ended",
            "runtime":60,
            "premiered":"2007-09-27",
            "officialSite":"http://www.chcgv.com/special/theme2.asp",
            "schedule":{
               "time":"23:00",
               "days":[
                  "Sunday"
               ]
            },
            "rating":{
               "average":null
            },
            "weight":0,
            "network":{
               "id":1271,
               "name":"CGV",
               "country":{
                  "name":"Korea, Republic of",
                  "code":"KR",
                  "timezone":"Asia/Seoul"
               }
            },
            "webChannel":null,
            "externals":{
               "tvrage":null,
               "thetvdb":281395,
               "imdb":null
            },
            "image":{
               "medium":"http://static.tvmaze.com/uploads/images/medium_portrait/70/176372.jpg",
               "original":"http://static.tvmaze.com/uploads/images/original_untouched/70/176372.jpg"
            },
            "summary":"<p>Park Han Byul and Park Kwang Hyun star in this bubbly drama about a committed couple who realize they might not belong together at all. Jeong Seok and Yeo Kyung have been dating for years. Jeong Seok is uncultured and poor, while Yeo Kyung is polished and rich. They both begin to feel dissatisfied, and then they both meet someone else. Can true love overcome habit?</p>",
            "updated":1486916932,
            "_links":{
               "self":{
                  "href":"http://api.tvmaze.com/shows/19991"
               },
               "previousepisode":{
                  "href":"http://api.tvmaze.com/episodes/892736"
               }
            }
         }
      },
      {
         "score":11.214653,
         "show":{
            "id":1725,
            "url":"http://www.tvmaze.com/shows/1725/breaking-borders",
            "name":"Breaking Borders",
            "type":"Reality",
            "language":"English",
            "genres":[

            ],
            "status":"Running",
            "runtime":60,
            "premiered":"2015-03-15",
            "officialSite":null,
            "schedule":{
               "time":"21:00",
               "days":[
                  "Sunday"
               ]
            },
            "rating":{
               "average":null
            },
            "weight":0,
            "network":{
               "id":82,
               "name":"Travel Channel",
               "country":{
                  "name":"United States",
                  "code":"US",
                  "timezone":"America/New_York"
               }
            },
            "webChannel":null,
            "externals":{
               "tvrage":48088,
               "thetvdb":293247,
               "imdb":null
            },
            "image":{
               "medium":"http://static.tvmaze.com/uploads/images/medium_portrait/12/31467.jpg",
               "original":"http://static.tvmaze.com/uploads/images/original_untouched/12/31467.jpg"
            },
            "summary":"<p><b>Breaking Borders</b> follows seasoned journalist Mariana van Zeller and acclaimed chef Michael Voltaggio as they travel into conflict zones to get the story behind the story. Together, they have a unique and challenging goal: to gather people from all sides of the conflict to break bread and explore the issues that divide them.<br><br> In each episode, Mariana and Michael take viewers on a journey through a different country in conflict. They meet people affected by the unrest, while exploring the history and culture that has created it. As Mariana digs deeper into the issues, Michael goes on a culinary adventure, collecting ideas and ingredients to create an unbelievable meal inspired by the people he has met.</p>",
            "updated":1477801902,
            "_links":{
               "self":{
                  "href":"http://api.tvmaze.com/shows/1725"
               },
               "previousepisode":{
                  "href":"http://api.tvmaze.com/episodes/157289"
               }
            }
         }
      },
      {
         "score":11.214653,
         "show":{
            "id":531,
            "url":"http://www.tvmaze.com/shows/531/breaking-amish",
            "name":"Breaking Amish",
            "type":"Reality",
            "language":"English",
            "genres":[

            ],
            "status":"To Be Determined",
            "runtime":60,
            "premiered":"2012-09-09",
            "officialSite":"http://www.tlc.com/tv-shows/breaking-amish/",
            "schedule":{
               "time":"22:00",
               "days":[
                  "Sunday"
               ]
            },
            "rating":{
               "average":9
            },
            "weight":0,
            "network":{
               "id":80,
               "name":"TLC",
               "country":{
                  "name":"United States",
                  "code":"US",
                  "timezone":"America/New_York"
               }
            },
            "webChannel":null,
            "externals":{
               "tvrage":32524,
               "thetvdb":261926,
               "imdb":"tt2386354"
            },
            "image":{
               "medium":"http://static.tvmaze.com/uploads/images/medium_portrait/82/206571.jpg",
               "original":"http://static.tvmaze.com/uploads/images/original_untouched/82/206571.jpg"
            },
            "summary":"<p><b>Breaking Amish</b> follows a fresh group of young men and women as they leave their conservative, rural communities behind for a chance to live in New York and fully experience English life. The new cast of five heads to Brooklyn, N.Y., to explore life beyond their Amish culture. Throughout their journey, their relationships are tested and life-altering choices must be made. By leaving their communities, they risk changing their lives and ties with their families for good, but they all believe that the chance to live in New York and pursue their dreams is well worth it.</p><p>This season presents new and different challenges as the cast adjusts to life in Brooklyn, where the cultures are countless and the temptations are at an all-time high. Using this opportunity to find themselves, the cast navigates through the nuances of the Brooklyn lifestyle and also makes time to visit the famous New York City landmarks to enjoy all the English things that the city has to offer. While they all have similar, conservative backgrounds, they must get used to not only a new city, but also each other and endure growing pains along the way. The trip to Brooklyn chronicles the tough decisions they must make to leave their families and friends behind.</p>",
            "updated":1477798206,
            "_links":{
               "self":{
                  "href":"http://api.tvmaze.com/shows/531"
               },
               "previousepisode":{
                  "href":"http://api.tvmaze.com/episodes/231024"
               }
            }
         }
      },
      {
         "score":11.214653,
         "show":{
            "id":21927,
            "url":"http://www.tvmaze.com/shows/21927/breaking-boston",
            "name":"Breaking Boston",
            "type":"Reality",
            "language":"English",
            "genres":[
               "Drama"
            ],
            "status":"Ended",
            "runtime":60,
            "premiered":"2014-03-13",
            "officialSite":"http://www.aetv.com/shows/breaking-boston",
            "schedule":{
               "time":"22:00",
               "days":[
                  "Thursday"
               ]
            },
            "rating":{
               "average":null
            },
            "weight":0,
            "network":{
               "id":29,
               "name":"A&E",
               "country":{
                  "name":"United States",
                  "code":"US",
                  "timezone":"America/New_York"
               }
            },
            "webChannel":null,
            "externals":{
               "tvrage":null,
               "thetvdb":278764,
               "imdb":null
            },
            "image":{
               "medium":"http://static.tvmaze.com/uploads/images/medium_portrait/79/198296.jpg",
               "original":"http://static.tvmaze.com/uploads/images/original_untouched/79/198296.jpg"
            },
            "summary":"<p><b>Breaking Boston</b> follows a group of four blue-collar women in their twenties trying to break the cycle of their peers in a town where education, employment and opportunities are hard to come by. Each one of them has already hit rock bottom via destructive relationships or bad choices, but they're all leaning on each other and looking for a way out.</p>",
            "updated":1477801677,
            "_links":{
               "self":{
                  "href":"http://api.tvmaze.com/shows/21927"
               },
               "previousepisode":{
                  "href":"http://api.tvmaze.com/episodes/957627"
               }
            }
         }
      },
      {
         "score":11.214653,
         "show":{
            "id":5434,
            "url":"http://www.tvmaze.com/shows/5434/breaking-bonaduce",
            "name":"Breaking Bonaduce",
            "type":"Reality",
            "language":"English",
            "genres":[

            ],
            "status":"Ended",
            "runtime":30,
            "premiered":"2005-09-11",
            "officialSite":"https://web.archive.org/web/20081219042126/http://www.vh1.com/shows/dyn/breaking_bonaduce_2/series.jhtml",
            "schedule":{
               "time":"21:30",
               "days":[
                  "Sunday"
               ]
            },
            "rating":{
               "average":null
            },
            "weight":0,
            "network":{
               "id":55,
               "name":"VH1",
               "country":{
                  "name":"United States",
                  "code":"US",
                  "timezone":"America/New_York"
               }
            },
            "webChannel":null,
            "externals":{
               "tvrage":6724,
               "thetvdb":80724,
               "imdb":null
            },
            "image":{
               "medium":"http://static.tvmaze.com/uploads/images/medium_portrait/22/55930.jpg",
               "original":"http://static.tvmaze.com/uploads/images/original_untouched/22/55930.jpg"
            },
            "summary":"<p>VH1 takes you on an inside tour of the unconventional relationship between former child TV star Danny Bonaduce and his wife Gretchen. Follow the couple as they seek help from Dr. Garry Corgiatt through couples therapy. Dr. Garry will challenge the couple to tackle their mountain of issues including Danny's infidelity, addiction, and celebrity. Danny and Gretchen tied the knot after knowing each other for only seven hours, but fifteen years later the couple is still married and they are turning to Dr. Garry for help keeping it this way.</p>",
            "updated":1477802376,
            "_links":{
               "self":{
                  "href":"http://api.tvmaze.com/shows/5434"
               },
               "previousepisode":{
                  "href":"http://api.tvmaze.com/episodes/330011"
               }
            }
         }
      }
   ]);
  }

}
