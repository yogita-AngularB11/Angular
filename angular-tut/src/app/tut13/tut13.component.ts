import { Component } from '@angular/core';

@Component({
  selector: 'app-tut13',
  imports: [],
  templateUrl: './tut13.component.html',
  styleUrl: './tut13.component.css'
})
export class Tut13Component {
name="";
getName(event:Event){
  // console.log(event);
  // console.log(event.target.value); 
   //event.target is possibly null

   const name=(event.target as HTMLInputElement).value
console.log(name);

  
}
}
