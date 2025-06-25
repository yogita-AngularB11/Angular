import { Component } from '@angular/core';

@Component({
  selector: 'app-tut15',
  imports: [],
  templateUrl: './tut15.component.html',
  styleUrl: './tut15.component.css',
})
export class Tut15Component {
  // display = false;
  display=true;
  x = 3;
toggleDiv=true;

  hide() {
    this.display = false;
  }
  show() {
    this.display = true;
  }
  toggle() {
    this.display = !this.display;
  }
  toggleTwo() {
    this.toggleDiv = !this.toggleDiv;
  }
}
