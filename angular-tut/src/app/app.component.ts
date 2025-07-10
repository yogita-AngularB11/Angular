import { Component } from '@angular/core';
import { Tut27Component } from './tut27/tut27.component';


@Component({
  selector: 'app-root',
  // imports: [Tut13Component,Tut14Component,Tut15Component,Tut16Component,Tut17Component,Tut18Component,Tut19Component],
  imports:[Tut27Component],
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
