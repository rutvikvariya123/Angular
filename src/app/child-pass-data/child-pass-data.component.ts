import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-pass-data',
  templateUrl: './child-pass-data.component.html',
  styleUrls: ['./child-pass-data.component.css']
})
export class ChildPassDataComponent implements OnInit {

  constructor() { }
  
  @Input() parentPass = "test"
  
  @Output() childParentEvent = new EventEmitter<string>();
  ngOnInit(): void {
  }
}
