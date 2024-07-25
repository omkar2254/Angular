import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css'
})
export class MyFormComponent {
  studentObj: any = {
    firstname: '',
    lastname: '',
    username: '',
    city: '',
    state: '',
    zip: '',
    isTermsAccepted: false
  }

  formValue: any;
  resetValue: any;

  submitForm(){
    this.formValue = this.studentObj
  }

  resetForm(){
    this.resetValue = this.studentObj
  }
}
