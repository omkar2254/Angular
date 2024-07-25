import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reusable1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reusable1.component.html',
  styleUrl: './reusable1.component.css'
})
export class Reusable1Component {
  @Input() message: string = "";
  @Input() boxColor: string = "";
}
