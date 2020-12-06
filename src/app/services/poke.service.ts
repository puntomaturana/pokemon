import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  
  private serverURL: string = "https://pokeapi.co/api/v2/pokemon/";
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json;'
  });
  constructor(private http: HttpClient) { }
  
  getPoke() { 
    return this.http.get<any>(this.serverURL, { headers: this.headers });
  }
  
  getCharacter(id: string) {
    return this.http.get<any>(this.serverURL + id, { headers: this.headers });
  }
}