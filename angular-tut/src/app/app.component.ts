import { Component } from '@angular/core';

// import { Tut13Component } from './tut13/tut13.component';
// import { Tut14Component } from './tut14/tut14.component';
// import { Tut15Component } from './tut15/tut15.component';
// import { Tut16Component } from './tut16/tut16.component';
// import { Tut17Component } from './tut17/tut17.component';
// import { Tut18Component } from './tut18/tut18.component';
// import { Tut19Component } from './tut19/tut19.component';
// import { Tut22Component } from './tut22/tut22.component';
import { Tut26Component } from './tut26/tut26.component';

@Component({
  selector: 'app-root',
  // imports: [Tut13Component,Tut14Component,Tut15Component,Tut16Component,Tut17Component,Tut18Component,Tut19Component],
  imports:[Tut26Component],
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
