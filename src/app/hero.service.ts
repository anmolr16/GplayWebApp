import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Hero { id: number; name: string; }

@Injectable({providedIn: 'root'})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: HttpClient) { }

  // getHeroes(): Observable<Hero[]> {
  //   return this.http.get<Hero[]>(this.heroesUrl);
  // }

  // deleteHero(id): Observable<any> {
  //   return this.http.delete<any>(this.heroesUrl + '/' + id);
  // }
  getAppList(): Observable<any> {
    return this.http.get<any>('https://n2clynfzi2.execute-api.ap-south-1.amazonaws.com/DEV/gplay-list');
  }

  getAppDetail(appID): Observable<any> {
    return this.http.get<any>('https://n2clynfzi2.execute-api.ap-south-1.amazonaws.com/DEV/gplay-info?appID=' + appID);
  }
}
