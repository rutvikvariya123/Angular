import { UseChildComponent } from './../use-child/use-child.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  toggle:boolean = false;
  constructor() { 
   
  }
  ngOnInit(): void {

  }
  value:string;
  getValue(data:any){
    this.value = data;
  }

  removeGetCom(){
    this.toggle = !this.toggle;
  }
}
