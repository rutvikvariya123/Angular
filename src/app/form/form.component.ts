import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-formComponent',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('form') frm !: NgForm
  constructor() { }

  ngOnInit(): void {
  }


  username = '';
  email = '';
  number = '';
  submitted = false;  // Flag to track if the form was submitted


  onSubmit() {
    this.submitted = true;  // Set submitted to true on form submission
    if (this.frm.valid) {
      console.log('Form Values:', this.frm.value);
      this.submitted = false
      this.frm.reset();
    }
  }

  enterNumber(event: any) {
    if ((event.key >= '0' && event.key <= '9') ||
      event.key === 'Backspace' || event.key === 'Tab' ||
      event.key === 'ArrowLeft' || event.key === 'ArrowRight' ||
      event.key === 'Delete' || event.key === 'Enter') {
      return;  // Allow input
    } else {
      event.preventDefault();
    }
  }
}
