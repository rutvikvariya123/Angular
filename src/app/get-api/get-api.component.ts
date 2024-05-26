import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../sheard/services/users-data.service'; ''

@Component({
  selector: 'app-get-api',
  templateUrl: './get-api.component.html',
  styleUrls: ['./get-api.component.css']
})
export class GetApiComponent implements OnInit {
  users:any = [];
  constructor(private getUsersdata: UsersDataService) {
    // getUsersdata.users().subscribe((data) =>{
    //   this.users = data
    //   console.log("this.users::::::::::>",this.users);
    // }) 
  }

  ngOnInit(): void {
  }

}
