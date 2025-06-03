import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'rxjsDemo';
  // observable is pre-defined in RxJs.
  // a multiple asynchronous events will be their 
  // where one observable go to multiple asynchronous event 
  // one after another by subscribing it
  //httpClient : using it you directly get values
  obs !:any;
  msg !:any;
  constructor(private hc :HttpClient){
    this.obs = new Observable((sub) => {
      // every observable have an observer 
      // and will have events like next,error,complete
    sub.next(1);
    sub.next(10);
    sub.error("My Error")
    sub.next(100);
    sub.next(1000);
    sub.complete();
  });
   
  this.msg=this.hc.get('https://official-joke-api.appspot.com/jokes/random');
  }
  ngOnInit() {
    this.obs.subscribe((val: any) => console.log(val));
  }
}
