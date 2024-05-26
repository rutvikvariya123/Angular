import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor() { }

  msgAlert(){
    alert("thaks ypu for subscribe");
  }

  pproduct = {pid:101,pname:"mackbook"};
}
