import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyServiceService } from '../../service/my-service.service';
import { ReusableComponent } from '../../reusable/reusable.component';
import { MyButtonComponent } from '../../my-button/my-button.component';

@Component({
  selector: 'app-api-component',
  standalone: true,
  imports: [FormsModule, CommonModule, ReusableComponent, MyButtonComponent],
  templateUrl: './api-component.component.html',
  styleUrl: './api-component.component.css'
})
export class ApiComponentComponent implements OnInit{

  userList: any [] = []
  message: string = ""
  alertMsg: string = ""
  changeMsg(){
    this.alertMsg = "dynamic_message_here"
  }

  //dependency injection
  constructor(private http: HttpClient, private myService: MyServiceService){

  }

  // getAllUser(){
  //   this.http.get('https://jsonplaceholder.typicode.com/users/').subscribe((result: any)=>{
  //     this.userList = result
  //   }, error=>{
  //     console.log('Error while fetching data: ', error)
  //   })
  // }

  //Using services
  getAllUser(){
    this.myService.getAllUserData().subscribe((res: any)=>{
      this.userList = res
    }, error=>{
      alert(error.message)
    })
  }

  //Post Data
  sendData: any = {
    "departmentId":0,
    "departmentName":"",
    "departmentLogo":""
  }

  // onSave(){
  //   this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.sendData).subscribe((res:any)=>{
  //     if(res.result){
  //       alert('Data added successfully')
  //       this.getData()
  //     }else{
  //       alert(res.message)
  //     }
  //   })
  // }

  //using services
  onSave(){
    this.myService.postData(this.sendData).subscribe((res: any)=>{
      if(res.result){
        alert('Data added successfully')
        this.getData()
      }else{
        alert(res.message)
      }
    })
  }

  //Every time page reload this function automatically call itself
  ngOnInit(): void {
      this.getAllUser()
      this.getData()
  }
  userData: any[] = []
  getData(){
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res: any)=>{
      this.userData = res.data
    }, error=>{
      console.log('Error while fetching data: ', error)
    })
  }

  onEdit(data: any){
    this.sendData = data
  }

  onUpdate(){
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment", this.sendData).subscribe((res: any)=>{
      if(res.result){
        alert('Data added successfully')
        this.getData()
        this.sendData.departmentId = 0
        this.sendData.departmentName = ""
        this.sendData.departmentLogo = ""
      }else{
        alert(res.message)
      }
    })
  }

  onDelete(id: number){
    this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId="+ id).subscribe((res: any)=>{
      if(res.result){
        alert('Data deleted successfully')
        this.getData()
      }else{
        alert(res.message)
      }
    })
  }
}
