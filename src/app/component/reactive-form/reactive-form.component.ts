import { Component } from '@angular/core';
import { Reusable3Component } from '../../reusableCo/reusable3/reusable3.component';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [Reusable3Component],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
 
}
