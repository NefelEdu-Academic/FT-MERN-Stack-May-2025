import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/task';
import { TaskService } from '../services/task.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-display-tasks',
  imports: [CommonModule, RouterLink],
  templateUrl: './display-tasks.component.html',
  styleUrl: './display-tasks.component.css'
})
export class DisplayTasksComponent implements OnInit {

  allTasks: Task[] = []

  constructor(private taskService: TaskService){}
  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe({
      next: data => this.allTasks = data,
      error: err=> console.error(err),
      complete: ()=> console.info("get all tasks completed")
    })
    throw new Error('Method not implemented.');
  }


    deleteTask(id: string | undefined): void{
      this.taskService.deleteTask(id!).subscribe({
        next: ()=> this.allTasks = this.allTasks.filter(task =>task._id !== id),
        error: err=> console.error(err)
      })
    }


}
