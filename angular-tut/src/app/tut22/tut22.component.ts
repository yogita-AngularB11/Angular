import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-tut22',
  imports: [],
  templateUrl: './tut22.component.html',
  styleUrl: './tut22.component.css'
})
export class Tut22Component {
  userName=signal('Yogita')
  count=signal(0)
  displayHeading=false; 

  constructor(){
    effect(()=>{ 
      // console.log(this.userName());
      // console.log(this.count());
      if (this.count()==2) {
        this.displayHeading=true;
        setTimeout(()=>{
          this.displayHeading=false; 
        },2000)
      }
    })
  }

  toggleValue(){
    this.count.set(this.count()+1)
  }

}
