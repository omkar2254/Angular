import { Component } from '@angular/core';
import { MyCardComponent } from '../../my-card/my-card.component';
import { Reusable1Component } from '../../reusableCo/reusable1/reusable1.component';
import { Reusable2Component } from '../../reusableCo/reusable2/reusable2.component';
@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [MyCardComponent, Reusable1Component, Reusable2Component],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  onAlert(){
    alert("Hey, I am reusable button");
  }
}
