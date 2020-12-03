import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  
  private serverURL: string = "https://pokeapi.co/api/v2/";
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json;'
  });
  constructor(private http: HttpClient) { }
  
  getPoke() { 
    return this.http.get(this.serverURL + "pokemon")
    .pipe(
      retry(4),
      catchError(err => {
        return of(err)
      })
      )
    }
  }
