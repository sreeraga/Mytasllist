import { Component } from '@angular/core';
import {TaskServices} from '../../services/task.services';
import {Task} from '../../../task'
@Component({
    moduleId:module.id,
  selector: 'tasks',
  templateUrl: 'task.component.html'
 
})
export class TaskComponent {
    tasks:Task[];
   constructor(private taskservice:TaskServices){
this.taskservice.getTasks().subscribe(tasks=>{this.tasks=tasks})
   }
  
 }
