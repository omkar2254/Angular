import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
  divBgColor: string = 'bg-primary';
  isDiv2Active: boolean = true

  num1: string = ""
  num2: string = ""

  isActive: boolean = true
  addYellow(){
    this.divBgColor = 'bg-warning'
  }
  addGreen(){
    this.divBgColor = 'bg-success'
  }

  colorToggler(){
    this.isDiv2Active = !this.isDiv2Active
  }

  myArray: any = [
    {id: 1, name: 'Harlen', marks: 50, isActive: true},
    {id: 2, name: 'Stepherd', marks: 100, isActive: false}
  ]

  customCss: any ={
     'color': 'white',
     'background-color': 'green',
     'width': '200px',
     'height': '200px',
     'border-radius': '50%'
  }

}
