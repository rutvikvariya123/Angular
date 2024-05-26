import { Component, OnInit, ViewChild, Input, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {UsersDataService} from'../sheard/services/users-data.service'
import Swal from 'sweetalert2'
import {Router } from '@angular/router';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { PaginatorModule } from 'primeng/paginator';
import { Subject } from 'rxjs';

// interface

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
function notAllowSpace(){

}
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveformComponent implements OnInit {
  submitted = false;
  userssss:any =[];

  showSubmit :boolean = true;
  showUpdate :boolean = false;
  minDate: string;
  public showPassword: boolean;

  userForm:FormGroup;
  promptUser: any;
  private _confirmation: any;
  constructor(private userService:UsersDataService,private router:Router) {  
    this.userForm = new FormGroup({
      fname : new FormControl('',[Validators.required]),
      lname : new FormControl('',[Validators.required]),
      // email : new FormControl('',[Validators.required,Validators.email]),
      email:new FormArray([
        new FormControl('',[Validators.required,Validators.email])
      ]),
      // contact : new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$"),Validators.minLength(10), Validators.maxLength(10)]),
      
      contact:new FormArray([
        new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$"),Validators.minLength(10), Validators.maxLength(10)])
      ]),

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
    this.getAllUser();
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }
 
  get getControl (){
    return this.userForm.controls
  }

  submitData() {
    this.submitted = true;
    const checkboxValue = this.userForm.get('cbox').value;
    if (this.userForm.valid) {
      if (!checkboxValue) { 
        Swal.fire("Please select checkbox !");
      } else {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Data has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        console.log('Form Values:', this.userForm.value);
       // Post API
        this.userService.addData(this.userForm.value).subscribe((data) => {
          console.log("data is added:::::::::>", data)
          this.getAllUser();
        });
        this.submitted = false;
        this.userForm.reset();
        window.location.reload();
      }
    }
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


  // api get data
  getAllUser(){
    this.userService.getAllUser().subscribe((data)=>{
      this.userssss = data;
    })
  }

  // delete api

  deleteUser(Id:any){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
          
        });
        
        this.userService.deleteUser(Id).subscribe((data)=>{
          console.log("record delted successfully",data);
          this.getAllUser();
        })
      }
    });
  }

  // public updateId;
  // editUser(data:any){
  //   this.showSubmit  = false;
  //   this.showUpdate = true;
    
  //   this.updateId = data.id;
  //   this.userForm.controls['fname']?.patchValue(data.fname);
  //   this.userForm.controls['lname']?.patchValue(data.lname);
  //   this.userForm.controls['email']?.patchValue(data.email);
  //   this.userForm.controls['contact']?.patchValue(data.contact);
  //   this.userForm.controls['department']?.patchValue(data.department);
  //   this.userForm.controls['head']?.patchValue(data.head);
  //   this.userForm.controls['date']?.patchValue(data.date);
  //   this.userForm.controls['city']?.patchValue(data.city);
  //   this.userForm.controls['state']?.patchValue(data.state);
  //   this.userForm.controls['country']?.patchValue(data.country);
  //   this.userForm.controls['pincode']?.patchValue(data.pincode);   
  //   this.userForm.controls['password']?.patchValue(data.password);
  //   this.userForm.controls['cpassword']?.patchValue(data.cpassword);
  //   this.userForm.controls['cbox']?.patchValue(data.cbox);
  // }

  // updateData(){
  //   const data = {
  //     ...this.userForm.value
  //   }
  //   const checkboxValue = this.userForm.get('cbox').value;
    
  //   if (this.userForm.valid) {
  //     if (!checkboxValue) { 
  //       Swal.fire("Please select checkbox !");
  //     } else{
  //       Swal.fire({
  //         title: "Do you want to save the changes?",
  //         showDenyButton: true,
  //         showCancelButton: true,
  //         confirmButtonText: "Save",
  //         denyButtonText: `Don't save`
  //       }).then((result) => {
  //         /* Read more about isConfirmed, isDenied below */
  //         if (result.isConfirmed) {
  //           Swal.fire("Saved!", "", "success");
  //           this.userService.updateUser(data,this.updateId).subscribe(()=>{
  //             this.showSubmit = true;
  //             this.showUpdate = false;
  //             this.userForm.reset();
  //             this.getAllUser();
  //         })
           
  //         } else if (result.isDenied) {
  //           Swal.fire("Changes are not saved", "", "info");
  //           this.userForm.reset();
  //         }
  //       });
  //     }
  //   }
  // }

  editData(id:any){
    this.router.navigateByUrl('/editUser/'  + id);
  }

  isNavbarOpen: boolean = false;
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

  // enable and disable 
  isEditable: { [key: number]: boolean } = {};
  users: any[] = [];
  toggleBtn(userId: number, event: any) {
    this.isEditable[userId] = event.checked;
    if (!event.checked) {
      this.removeUser(userId);
    }
  }
  removeUser(userId: number) {
    this.users = this.users.filter(user => user.id !== userId);
  }
  
  first: number = 0;
  rows: number = 10;
  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }

  // auth guard  candeactivate
  public deactivateSubject = new Subject<boolean>();
  canDeactivate(){
    const consfirmBoxvalue = confirm("You have unsaved changes.Are you sure want to leave?");
    
    if(consfirmBoxvalue ==true) {
      this.deactivateSubject.next(true);
      this.router.navigate(['/dummy'])
    }
    else{
      this.deactivateSubject.next(false);
    }
    return this.deactivateSubject;
  }

  // pagination
  p:any =0;


  // lazy loading
  onClickO(){ 
  this.router.navigate(['/a']);
  }  
    
  // formArray

  // email
  get email() {
    return this.userForm.get('email') as FormArray;
  }
  addEmail() {
    this.email.push(new FormControl('',[Validators.required,Validators.email]));
  }
  removeEmail(index: number) {
    this.email.removeAt(index);
  }
  //mobile number
  get contact() {
    return this.userForm.get('contact') as FormArray;
  }

  addContact() {
    this.contact.push(new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$"),Validators.minLength(10), Validators.maxLength(10)]));
  }
  removeContact(index: number) {
    this.contact.removeAt(index);
  }


  // password functionality
  

  showPasswords: boolean = false;
  togglePassword(event:Event):void{
    this.showPasswords = !this.showPasswords;
  }

  // multiple event not allowed spaces
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === ' ') {
      event.preventDefault();
    }
  }
}
