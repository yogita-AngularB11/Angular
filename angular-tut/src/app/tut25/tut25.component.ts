import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tut25',
  imports: [FormsModule],
  templateUrl: './tut25.component.html',
  styleUrl: './tut25.component.css'
})
export class Tut25Component {
task="";
taskList:{id:number,task:string}[]=[]
addTask(){
  this.taskList.push({id:this.taskList.length+1,task:this.task}  )
  console.log(this.taskList);
  this.task=''
}
deleteTask(id:number){
  this.taskList=this.taskList.filter((item)=>item.id !=id)
}
}
