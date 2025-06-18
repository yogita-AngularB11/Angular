import { Component } from '@angular/core';
import { Tut13Component } from './tut13/tut13.component';

@Component({
  selector: 'app-root',
  imports: [Tut13Component],
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
