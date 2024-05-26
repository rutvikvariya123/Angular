import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DesignutilityService } from './designutility.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  getUser:any= [];
  format: string;
  
  constructor(private _msgService:DesignutilityService,private router:Router){} 

  // dependencies
  pproduct = 10;
  ppname = "laptop"
  msgClick(){
    this._msgService.msgAlert();
  }

  ngOnInit() {
      this.pproduct = this._msgService.pproduct.pid;
      this.ppname = this._msgService.pproduct.pname;
  }

  title = 'learning';
  data = "code step by step";
  enterName:string ='';
  counter = 0;
  name = 'peter'
  disabled = false;
  placeholder = 'Enter Your Name';
  age = 15;
  day = 5;
  myVariable = "value1"; 
  users = ["rutvik","rahul","raj","yash"];
  dataSennt  = 100;
  image :string = "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600";
  
  //parent to child 
  passChild = "hello child component";
  
  // child to parent component
  childParent(data:string){
    console.log("child passed: " + data);
  }
  
  // userdeatils = [
  //   {
  //     name:"rutvik",
  //     email:"rutvik@gmail.com",
  //     password:"123"
  //   },
  //   {
  //     name:"raj",
  //     email:"raj@gmail.com",
  //     password:"456"
  //   },
  //   {
  //     name:"yash",
  //     email:"yash@gmail.com",
  //     password:"12345"
  //   }
  // ]

  // userss = [
  //   {
  //     name:"rutvik",
  //     phone:1234,
  //     socialAccount:["facebook","twitter"]
  //   },
  //   {
  //     name:"rahul",
  //     phone:1223,
  //     socialAccount:["facebook","snapchat"]
    
  //   },
  //   {
  //     name:"raj",
  //     phone:4235,
  //     socialAccount:["facebook","instagram"]
  //   }
  // ]
  
  // getData(name: number,secondPara:string){
  //     alert('name: ' + name);
  //     alert('name: ' + secondPara);
  // }
  
  // test(val:string){
  //   console.log("val::>",val);
  // }

  // getValue(val:string){
  //   this.enterName = val;
  // }
  
  // counterIncrement(type:any){
  //     type == 'add'? this.counter++ : this.counter--;
  // }

  // color = "green";  
  // bgColor = "";

  // updateColor(){
  //   this.color = "Orange";  
  //   this.bgColor = "#ADD8E6"
  // }
  
  
  //form  
  uname:any ="";
  email:any ="";
  password:any=""; 
  
  userData:any ={}    
  getformData(data:NgForm){
      this.userData = data;
  }
  display = true;

  toggleElement(){
    this.display = !this.display;
  }


  list:any[] = [];
  addTask(item:string){
    this.list.push({id:this.list.length,name:item});
    console.log(this.list);
  }
  removeTask(id:any){
    this.list  = this.list.filter((data)=>data.id !==id)
    // this.list.splice(this.list.indexOf(id))
  }

  submitData(data:NgForm){
   console.log(data); 
  }  


  // ngstyle  ngclass

  people:any[] =[
    {
      "name":"abc",
      "country":"india"
    },
    {
      "name":"xyz",
      "country":"india"
    },
    {
      "name":"pqr",
      "country":"uk"
    },
    {
      "name":"jkl",
      "country":"uk"
    },
    {
      "name":"mno",
      "country":"caneda"
    },
  ]

  getColor(country) {
    switch(country) {
        case "india":
            return 'green';
        case "uk":
            return 'red';
        case "caneda":
            return 'blue';
        default:
            return 'black'; 
    }
  }

  usersss:any[] = [
    'abc',
    'xyz',
    'pqr',
    'admin',
    'jkl'
  ]

  
// pipes
titles = "hello world"
today = Date()
a:number = 50;

user ={
  name:"abc",
  age:20
}

product = ["airbuds","mobile","tablet","mackbook"];
status = true;
}

