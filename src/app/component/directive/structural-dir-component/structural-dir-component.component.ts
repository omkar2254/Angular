import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgTemplateComponent } from "../../ng-template/ng-template.component";

@Component({
  selector: 'app-structural-dir-component',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, NgTemplateComponent],
  templateUrl: './structural-dir-component.component.html',
  styleUrl: './structural-dir-component.component.css'
})
export class StructuralDirComponentComponent {
  isDivVisible: boolean = true
  isToggleDiv: boolean = true

  input1: string = ""
  input2: string = ""

  isActive: boolean = false

  isGoa: string = ""

  myCities: string [] = ['Pune', 'Mumbai', 'Nagpur', 'Thane']
  myFriends: string [] = ['Abhi', 'Rutu', 'Yash', 'Rushi', 'Kedar']
  myData: any[] = [
    {id: 1, name: 'Omkar', isActive: true},
    {id: 2, name: 'Aryan', isActive: false},
    {id: 3, name: 'Om', isActive: true},
    {id: 4, name: 'Prash', isActive: true},
    {id: 5, name: 'jackey', isActive: false},
  ]
  isShow(){
    this.isDivVisible = true
  }

  isHide(){
    this.isDivVisible = false
  }
  isToggle(){
    this.isToggleDiv = !this.isToggleDiv
  }


}
