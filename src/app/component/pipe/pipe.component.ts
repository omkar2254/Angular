import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, interval, map } from 'rxjs'
import { MyPipePipe } from '../../customPipe/my-pipe.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, JsonPipe, AsyncPipe, MyPipePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
   myVariable: string = 'angular'
   myVariable2: string = 'Angular'
   myTitle: string = 'hello moto'
   myDate: Date = new Date()

   myObject: any = {
    name: 'Omkar',
    role: 'Software Engineer',
    age: null
   }

   currentTime: Observable<Date> =  new Observable<Date>

   constructor(){
    this.currentTime = interval(1000).pipe(map(()=> new Date()))
   }
}
