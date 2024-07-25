import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }

  //apiURL : string = ""
  
  getAllUserData(){
    return this.http.get("https://jsonplaceholder.typicode.com/users/")
  }

  //api for post data
  postData(obj: any){
    return this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", obj)
  }
}
