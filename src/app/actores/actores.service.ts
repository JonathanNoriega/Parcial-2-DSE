import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Actor } from '../actores/actor'

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  data = "https://gist.githubusercontent.com/t-montes/a334bf6e621351c117d4833780a41df1/raw/884804cfbb6dd924c0652f9efed5a3272da60ff3/hollywood-actors.json"
  constructor(private http: HttpClient) { }

  listActores(): Observable<Actor[]>{
      return this.http.get<Actor[]>(this.data);
  }
}
