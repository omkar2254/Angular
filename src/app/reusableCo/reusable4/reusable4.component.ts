import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reusable4',
  standalone: true,
  imports: [],
  templateUrl: './reusable4.component.html',
  styleUrl: './reusable4.component.css'
})
export class Reusable4Component {
  @Input() message: string = "";
}
