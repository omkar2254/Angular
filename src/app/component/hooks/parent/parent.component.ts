import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  private number: number = 4444

  get counter(){
    return this.number
  }
  set counter(value: number){
    this.number = value
  }

  increment(){
    this.counter++
  }
  decrement(){
    this.counter--
  }
}
