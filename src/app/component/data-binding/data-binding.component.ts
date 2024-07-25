import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  //Declarng variables
  //Data types: String, Number, Boolean, etc..

  inputType = "checkbox"
  myString: string = 'I am String'
  myNumber: number = 3849
  myBool: boolean = true
  myDate: Date = new Date()
  myPropertyString: string = 'Property String'
  stateName: string = 'Maharashtra'
  myVaru: string = "I am varu"

  firstName = signal('Omkar Patil')

  //dependency injection
  constructor(private router: Router){
    
  }

  navigateToDirective(){
    this.router.navigateByUrl("structural-directive")
  }

  showAlert(message: string){
    alert(message)
  }

  changeString(message: string){
    this.myString = 'React JS'
    this.firstName.set('Sr.Full Stack Developer')
  }

  changeVaru(){
    this.myVaru = "I am varu 2"
  }

}
