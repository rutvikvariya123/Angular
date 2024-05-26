import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CrudopService {

  readonly url = "http://localhost:3000/addUser";
  constructor(private http:HttpClient) {}

 addUpdateUser(data: any) {
  return this.http.put(`${this.url}/${data.id}`, data)
      
}

  addData(data:any){
    return this.http.post('http://localhost:3000/addUser',data)
  }
  getAllUser(){
    return this.http.get(this.url);
  }

  DeleteUserById(ID:any){
    return this.http.delete(`${this.url}/${ID}`)
  }

  getUserById(ID:any){
    return this.http.get(`${this.url}/${ID}`);    
  }
}
