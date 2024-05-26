import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  users(){
    return [
      {
        name:"abc",
        age:20,
        email:"abc@example.com"
      },
      {
        name:"pqr",
        age:30,
        email:"pqr@example.com"
      },
      {
        name:"xyz",
        age:22,
        email:"xyz@example.com"
      }
    ]
  }
}
