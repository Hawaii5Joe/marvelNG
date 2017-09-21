import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MarvelService {

  // variables ill need


  // service calls  
  private baseUrl: string = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=e1588be08057fa9f788890bd7aa3015c&hash=5f795f67235dfa4fc908dd641f015e07&limit=50";


  constructor(private http: Http) { }

  getHero(searchTerm: string = ''): Observable<any> {
    let endpoint = this.baseUrl
    if (searchTerm) endpoint += '&nameStartsWith=' + searchTerm

    return this.http.get(endpoint)
      .map(result => {
        return result.json()
      })

  }

  // getHeroSearch(getSearch): Observable<any> {

  //   return this.http.get(this.getHeros + "&nameStartsWith=" + getSearch)
  //     .map(result => {
  //       return result.json()
  //     })

  // }














































































}
