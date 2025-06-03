import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject,of,from, map } from 'rxjs';

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
  obs!: any;
  msg!: any;

  // ---------------------------------Subject----------------------------------
  subj = new Subject();

  constructor(private hc: HttpClient) {
    this.obs = new Observable((sub) => {
      // every observable have an observer
      // and will have events like next,error,complete
      sub.next(1);
      sub.next(10);
      sub.error('My Error');
      sub.next(100);
      sub.next(1000);
      sub.complete();
    });
   this.msg = this.hc.get(
      'https://official-joke-api.appspot.com/jokes/random'
    );
    // this.obs.subscribe((val: any) => console.log(val));
    this.subj.subscribe({
      next: (val) => console.log(val),
      error: () => console.log('Error'),
      complete: () => console.log('Completed'),
    });

    // -----------------------Operators------------------------
    of(5,6,7,9).subscribe((val)=>console.log(val));
    of(5,6,7,9).pipe(map((val)=>val*2)).subscribe((val)=>console.log(val));
    from([5,6,7,9]).subscribe((val)=>console.log(val))
  }
  ngOnInit() {
   this.obs.subscribe((val: any) => console.log(val));
   this.subj.next(100);
   this.subj.next(1000);
   this.subj.complete();
  }
}
