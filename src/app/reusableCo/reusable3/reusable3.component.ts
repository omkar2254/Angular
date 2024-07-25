import { Component, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reusable3',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reusable3.component.html',
  styleUrl: './reusable3.component.css'
})
export class Reusable3Component {
  stuedentForm : FormGroup = new FormGroup({
    firstname: new FormControl("", [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl(),
    username: new FormControl("johndoe@gmail.com", [Validators.email]),
    city: new FormControl(),
    state: new FormControl(),
    zip: new FormControl(),
    isTermsAccepted: new FormControl()
  })

  formValue: any;

  @Output() onBtnClick = new EventEmitter<any>()
  onSave(){
    debugger;
    this.formValue = this.stuedentForm.value;
    this.onBtnClick.emit()
  }
}
