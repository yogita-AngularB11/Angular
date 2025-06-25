import { Component } from '@angular/core';

@Component({
  selector: 'app-tut16',
  imports: [],
  templateUrl: './tut16.component.html',
  styleUrl: './tut16.component.css'
})
export class Tut16Component {
color=0;
handleColor(val:number){
  this.color=val;
}
handleInput(event:Event){
 const e= event.target as HTMLInputElement;
  this.color=parseInt(e.value);
}
}
