import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-method',
  templateUrl: './lifecycle-method.component.html',
  styleUrls: ['./lifecycle-method.component.css']
})
export class LifecycleMethodComponent implements OnInit {
  @Input() myData:any = "hello everyone";
  // fisrt called
  constructor() { 
    console.log("contsructor called");
  } 

  //input changes pe called hoga 
  ngOnChanges(changes): void {
    console.log("ngonchages Called");
  }

  //compoenent creation pe or ui pe data show ke vakt call hoga 
  ngOnInit(): void {
    console.log("ngOnInit called");
  }

  ngDoCheck(){
      console.log("ngDoCheck called");
  }

  ngAfterContentInit(){
    console.log("ngaftercontentInit called"); 
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called");
  }


  ngAfterViewInit(){
    console.log("ngAfterViewInit called");
  }

  ngAfterViewChecked() {
      console.log("ngafterviewChecked called");
  }
  
  ngOnDestroy(){
    console.log("ngdestroy called");
  } }
