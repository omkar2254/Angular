import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {
  @Input() btnText: string = ""
  @Input() btnClass: string = ""
  onClick(){
    
  }
}
