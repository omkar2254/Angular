import { Component, OnChanges, OnInit, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit,AfterContentChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy { 
  //DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked
  constructor(){
    console.log('constructor')
  }

  //Mostly used where we have reusable component
  ngOnChanges(changes: SimpleChanges): void {
      console.log("ngOnChanges")
  }

  //ngOnInit runs only once when the component mounts and it runs after the constructor
  //so after loading the component if we want to do anything the we can write that code in ngOnInit
  //Ex - api calls
  //Mostly used
  ngOnInit(): void {
    console.log('ngOnInit')
  }
  
  //bascially angular works on change detection so every time when something change this event called
  //Runs every time this component is checked for changes.
  //This method runs very frequently and can significantly impact your page's performance. Avoid defining this hook whenever possible, only using it when you have no alternative.
  ngDoCheck(): void{
    console.log('ngDoCheck')
  }

  //After intializing the view this event triggerd
  //Runs once after the component's view has been initialized.
  ngAfterViewInit(): void{
    console.log('ngAfterViewInit')
  }
  //Runs every time the component's view has been checked for changes.
  ngAfterViewChecked(): void{
    console.log('ngAfterViewChecked')
  }

  //If we have any extenral event like image or video so after loading that this events are triggerd
  //Runs once after the component's content has been initialized.
  ngAfterContentInit(): void{
    console.log('ngAfterContentInit')
  }
  //Runs every time this component content has been checked for changes.
  ngAfterContentChecked(): void{
    console.log('ngAfterContentChecked')
  }

  //After destroying the component 
  //Ex - after moving from one page to another this event is triggerd
  //Runs once before the component is destroyed.
  //mostly used
  ngOnDestroy(): void{
    console.log('ngOnDestroy')
  }
}
