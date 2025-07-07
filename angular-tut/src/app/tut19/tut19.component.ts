import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-tut19',
  imports: [],
  templateUrl: './tut19.component.html',
  styleUrl: './tut19.component.css'
})
export class Tut19Component {
  x=20;
  count=signal(10);

  updateValue(){
    this.x=30;
  }

}
