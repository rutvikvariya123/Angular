import { Injectable, SkipSelf } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  url = "http://localhost:3000/addUser";
  

  constructor(private http:HttpClient ) {
  }
  
  getAllUser(){
    return this.http.get(this.url)
  }
  addData(data:any){
    return this.http.post(this.url, data)
  }
  deleteUser(Id:any){
    return this.http.delete(`${this.url}/${Id}`)
  }

  // updateUser(data: any, id: any) {
  //   return this.http.put(`${this.url}/${id}`, data);
  // }

  getSpecificUser(id:any){
    return this.http.get(`${this.url}/${id}`)
  }

  updateuser(data:any, id: any){
    return this.http.put(`${this.url}/${id}`,data)
  }

}
