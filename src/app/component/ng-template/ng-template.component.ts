import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.css'
})
export class NgTemplateComponent {
  isShow: boolean = true
  userName: string = 'Omkar'

  onShow(){
    this.isShow = true;
  }
  onHide(){
    this.isShow = false;
  }

  @ViewChild('dynamicTemplate') dynamicTemp : TemplateRef<any> | undefined;
  @ViewChild('dynamicContainer', {read:ViewContainerRef}) dynamicCont : ViewContainerRef | undefined;
  
  loadTemplate(){
    if(this.dynamicTemp)
    this.dynamicCont?.createEmbeddedView(this.dynamicTemp)
  }
}
