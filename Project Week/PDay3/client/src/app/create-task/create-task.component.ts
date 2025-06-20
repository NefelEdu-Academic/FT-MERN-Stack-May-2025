import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../interfaces/task';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  imports: [FormsModule, CommonModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {

  newTask: Task = {title:"", content: "", priority:'', dueDate:""}
  errorMessage: any = {}

  constructor(private taskService: TaskService, private router: Router){}

  handleSubmit():void{
    this.taskService.createTask(this.newTask).subscribe({
      next: res=> this.router.navigate(['/']),
      error: err=> this.errorMessage = err

    })
  }

}
