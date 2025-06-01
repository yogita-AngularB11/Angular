import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit,OnChanges,DoCheck{
  title = 'lifeCycle';
  count=0;
  constructor() {
    console.log('Constructor is called');
  }
  handleClick(){
    this.count++;
  }
  ngOnChanges() {
    console.log('OnChages is called');
  }
  ngOnInit() {
    console.log('onInit called');
  }
  ngDoCheck(){
console.log("DoCheck called");

  }
}
