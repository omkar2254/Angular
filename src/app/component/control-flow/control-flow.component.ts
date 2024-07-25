import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
  isDivVisible: boolean = true
  isDivToggle: boolean = true

  num1: string = ""
  num2: string = ""

  selectedStatus: string = ""
  isShow(){
    this.isDivVisible = true
  }
  isHide(){
    this.isDivVisible = false
  }
  isToggle(){
    this.isDivToggle = !this.isDivToggle
  }

  myCities: string [] = ['Pune', 'Mumbai', 'Nagpur', 'Thane']

  myArray: any = [
    {id: 1, name: 'Harlen', marks: 50, isActive: true},
    {id: 2, name: 'Stepherd', marks: 100, isActive: false}
  ]

  dayNumber: string = ''
}
