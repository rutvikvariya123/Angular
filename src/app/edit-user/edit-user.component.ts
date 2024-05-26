import { UsersDataService } from './../sheard/services/users-data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  upateId!:any
  minDate: string;
  userForm:FormGroup;
  constructor(private userService:UsersDataService,private route:ActivatedRoute,private router:Router) {  
    this.userForm = new FormGroup({
      fname : new FormControl('',[Validators.required]),
      lname : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required,Validators.email]),
      contact : new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$"),Validators.minLength(10), Validators.maxLength(10)]),
      department : new FormControl('',[Validators.required]),
      head : new FormControl('',[Validators.required]),
      date: new FormControl('',[Validators.required]),
      city: new FormControl('',[Validators.required]),
      state: new FormControl('',[Validators.required]),
      country:new FormControl('',[Validators.required]),
      pincode: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]),
      password : new FormControl('',[Validators.required,Validators.minLength(6)]),
      cpassword : new FormControl('',[Validators.required,Validators.minLength(6)]),
      cbox: new FormControl(false)
    },{
      validators: this.passwordMatchValidator 
    }) 
  }

  ngOnInit(): void {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];

    this.upateId = this.route.snapshot.paramMap.get("id");
    this.userService.getSpecificUser(this.upateId).subscribe((data) => {
      
      this.userForm.controls['fname']?.patchValue(data['fname']);
      this.userForm.controls['lname']?.patchValue(data['lname']);
      this.userForm.controls['email']?.patchValue(data['email']);
      this.userForm.controls['contact']?.patchValue(data['contact']);
      this.userForm.controls['department']?.patchValue(data['department']);
      this.userForm.controls['head']?.patchValue(data['head']);
      this.userForm.controls['date']?.patchValue(data['date']);
      this.userForm.controls['city']?.patchValue(data['city']);
      this.userForm.controls['state']?.patchValue(data['state']);
      this.userForm.controls['country']?.patchValue(data['country']);
      this.userForm.controls['pincode']?.patchValue(data['pincode']);
      this.userForm.controls['password']?.patchValue(data['password']);
      this.userForm.controls['cpassword']?.patchValue(data['cpassword']);
      this.userForm.controls['cbox']?.patchValue(data['cbox']);
    })
  }
  
  get getControl (){
    return this.userForm.controls
  }

  inputMno(event:any){
    const inputElement = event.target as HTMLInputElement; // Get the input element
    const inputValue = inputElement.value; // Get the current value of the input
    const inputLength = inputValue.length; // Calculate the length of the input value

    if(inputLength <= 9 && (event.key >= '0' && event.key <= '9') ||
    event.key === 'Backspace' || event.key === 'Tab' ||
    event.key === 'ArrowLeft' || event.key === 'ArrowRight' ||
    event.key === 'Delete' || event.key === 'Enter'){
      return 
    }
    else{
      event.preventDefault();
    }
  }

  pincode(event:any){
    const inputElement = event.target as HTMLInputElement; // Get the input element
    const inputValue = inputElement.value; // Get the current value of the input
    const inputLength = inputValue.length; // Calculate the length of the input value

    if(inputLength <= 5  && (event.key >= '0' && event.key <= '9') ||
    event.key === 'Backspace' || event.key === 'Tab' ||
    event.key === 'ArrowLeft' || event.key === 'ArrowRight' ||
    event.key === 'Delete' || event.key === 'Enter'){
      return 
    }
    else{
      event.preventDefault();
    }
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password').value;
    const confirmPassword = formGroup.get('cpassword').value;

    return password === confirmPassword ? null : { mismatch: true };
  }

  updated = false;
  UpdateData(){
    this.updated = true;
    const checkboxValue = this.userForm.get('cbox').value;
    if (this.userForm.valid) {
      if (!checkboxValue) { 
        Swal.fire("Please select checkbox !");
      } 
      else{
        Swal.fire({
          title: "Do you want to save the changes?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success");
            this.userService.updateuser(this.userForm.value,this.upateId).subscribe((data)=>{
              this.userForm.reset();
              this.updated = false;
              this.router.navigateByUrl('/reactiveform');
            })
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        });
    }
  }
}
}