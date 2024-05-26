import { Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthenticatonService } from './../../sheard/services/authenticaton.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submited = false
  
  signUpform:FormGroup;
  constructor(private userServices: AuthenticatonService,private route:Router) {
    this.signUpform = new FormGroup({
      uname : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required,Validators.minLength(6)]),
    })
   }

  ngOnInit(): void {
  }
  
  get getControl() {
    return this.signUpform.controls;  
  }

  submitData(){
    this.submited = true
    if(this.signUpform.valid){
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Sign Up Successfully",
        showConfirmButton: false,
        timer: 1500
      });
      this.userServices.addData(this.signUpform.value).subscribe((data)=>{
        console.log("new data is::::::::::>",data);
      })
      this.submited = false;
      this.signUpform.reset()
      this.route.navigateByUrl("/login");
    }
  }
}
