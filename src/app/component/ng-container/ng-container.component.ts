import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NgContainerComponent {
  constructor(private http: HttpClient){

  }

  userList: any[] = []
  isApiCall: boolean = false
  getApi(){
    this.isApiCall = true
    this.http.get('https://jsonplaceholder.typicode.com/users/').subscribe((res: any)=>{
      this.userList = res;
      this.isApiCall = false;
    })
  }
}
