import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-reusable2',
  standalone: true,
  imports: [],
  templateUrl: './reusable2.component.html',
  styleUrl: './reusable2.component.css'
})
export class Reusable2Component {
  @Input() btnText: string = "";

  @Output() onBtnClick = new EventEmitter<any>()
  
  onClick(){
    this.onBtnClick.emit()
  }
  
}
