import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-card',
  standalone: true,
  imports: [],
  templateUrl: './my-card.component.html',
  styleUrl: './my-card.component.css'
})
export class MyCardComponent {
  @Input() message: string = "";
}
