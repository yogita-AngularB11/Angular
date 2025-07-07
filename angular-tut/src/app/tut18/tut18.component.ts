import { Component } from '@angular/core';

@Component({
  selector: 'app-tut18',
  imports: [],
  templateUrl: './tut18.component.html',
  styleUrl: './tut18.component.css'
})
export class Tut18Component {
  users=['Ayaan','Kundan','Akash','Shubham','Shreyada','Jeevan'];

  employees=[
    {name:'Ayaan',Age:'20',email:'ayaan@gmail.com'}, 
    {name:'Kundan',Age:'21',email:'kundan@yahoo.com'},
    {name:'Akash',Age:'22',email:'akash@tgc.com'}];

}
