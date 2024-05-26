import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-use-child',
  templateUrl: './use-child.component.html',
  styleUrls: ['./use-child.component.css']
})
export class UseChildComponent implements OnInit {

  constructor() { }
  @ Input() sentNumber = 0;
  ngOnInit(): void {
  }
}
