import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskComponent implements OnInit {
  
  tasks:Task[];
  constructor() {
    
   }

  ngOnInit() {
    this.tasks = [
      {title:"Write code",description:"Write some code today blablabla", isDone:false, steps:[{stepName:'write css', isDone:true},{stepName:'write Javascript', isDone:false}]},
      {title:"Conquer the world",description:"Take control of the whole world", isDone:false, steps:[{stepName:'dominate the media', isDone:false}]},
    ]
  }

  newTask(title,description){
    var isNotEmpty = (title != '' && description != '')?true:false;
    
    if(isNotEmpty) 
    this.tasks.unshift({title:title,description:description})
    else
    alert('Write something First!');
    
    return false;
  }
  
  deleteTask(task:Task) {
    var index = this.tasks.indexOf(task);
    this.tasks.splice(index,1);
  }

}


class Task {
  title:string = "oi";
  description:string;
  steps?:{stepName:string, isDone:boolean}[];
  isDone?:boolean
}