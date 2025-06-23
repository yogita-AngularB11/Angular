import { Component } from '@angular/core';
import { Tut13Component } from './tut13/tut13.component';
import { Tut14Component } from './tut14/tut14.component';

@Component({
  selector: 'app-root',
  imports: [Tut13Component,Tut14Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tut';
  handleClick(event:Event){
    const ele=event.target as HTMLElement;
    console.log(event.type);
    console.log(ele);
    console.log(ele.className);
    console.log(ele.innerText);
  }
}
