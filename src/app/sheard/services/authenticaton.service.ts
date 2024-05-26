import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticatonService {

  constructor(private http :HttpClient) {  }
  readonly url = 'http://localhost:3000/auth'

  addData(data){
    return this.http.post(this.url, data);
  }

  getData(){
    return this.http.get(this.url);
  }

  // encode and decode email and password function

  encode(data: string): string {
    return btoa(data);
  }
  
  decode(data: string): string {
    return atob(data);
  }
}
