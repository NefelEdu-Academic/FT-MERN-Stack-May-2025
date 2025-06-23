import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/task';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-task',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css'
})
export class UpdateTaskComponent implements OnInit{
  task!: Task
  errorMessage: any = {}
  constructor(private router: Router, private route: ActivatedRoute, private taskService: TaskService){}


  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get("id")
      if(id){
        this.taskService.getTaskById(id).subscribe({
          next: data =>{ this.task = data },
          error: err => console.log("Error, fetching task: ", err)
           

        })
      }
  }

  handleSubmit():void{
    this.taskService.updateTask(this.task).subscribe({
      next: () => this.router.navigate(['/']),
      error: err => this.errorMessage = err
    })
  }

}
