import { Component, OnInit } from '@angular/core';
import {UsersDataService} from '../sheard/services/users-data.service'

@Component({
  selector: 'app-post-api',
  templateUrl: './post-api.component.html',
  styleUrls: ['./post-api.component.css']
})
export class PostApiComponent implements OnInit {

  constructor(private sendData:UsersDataService) { }

  ngOnInit(): void {
  }

  // getUser(data:any){
  //   console.log("form data is:::::::",data);
  //   this.sendData.saveUsers(data).subscribe((result ) =>{
  //     console.log("result is:::::::>",result);
  //   })
  // }
}
