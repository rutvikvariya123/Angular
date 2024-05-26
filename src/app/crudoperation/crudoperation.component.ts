import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudopService } from '../sheard/services/crudop.service';

@Component({
  selector: 'app-crudoperation',
  templateUrl: './crudoperation.component.html',
  styleUrls: ['./crudoperation.component.css']
})


export class CrudoperationComponent implements OnInit {
  userform :FormGroup;
  users: any =[];
  constructor(public fb:FormBuilder, private crudservices:CrudopService) {
    this.userform = fb.group({
      name:["", Validators.required],
      email:["",Validators.required],
      contact:["",Validators.required],
      age:["",Validators.required],
    })
   }

  ngOnInit(): void {
    this.getAllUser();
  }

  public submitForm() {
    if(this.userform.invalid){
      return 
    }
    let data = {
      ...this.userform.value
    }
    this.crudservices.addData(data).subscribe((data) => { 
        this.userform.reset();
        this.getAllUser();
        console.log(data);  
    })
   }

  getAllUser(){
    this.crudservices.getAllUser().subscribe((data)=>{
      console.log(data,'ggggggggggggggg');
      this.users = data;
    })
  }

  DeleteUserById(ID:any){
    this.crudservices.DeleteUserById(ID).subscribe(()=>{
      alert("User deleted Successfully");
      this.getAllUser();

    })
  }

  getUserById(ID:any){
    var type = this.userform.value.ID == null ? 'Add' : 'Update';
    this.crudservices.getUserById(ID).subscribe((data)=>{
      if (type == 'Add') {
        alert("Data added");
    } else {
        alert("Data updated");
    }
      alert("user one get")
      console.log("user detail",data);
      this.userform.patchValue({
        name:data['name'],
        email:data['email'],
        contact:data['contact'],
        age:data['age']
      })
    })
  }
}
