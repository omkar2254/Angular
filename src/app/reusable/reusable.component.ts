import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  //decorators
  selector: 'app-reusable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reusable.component.html',
  styleUrl: './reusable.component.css'
})
export class ReusableComponent implements OnChanges{
  //Here input is decorator
  @Input() message: string = ""
  @Input() paragraph: string = ""

  ngOnChanges(changes: SimpleChanges){
    debugger;
    console.log('ngOnChanges from reusable')
  }
}
