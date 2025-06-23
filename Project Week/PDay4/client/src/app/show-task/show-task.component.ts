import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/task';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-show-task',
  imports: [CommonModule],
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css'
})
export class ShowTaskComponent implements OnInit {
  task!: Task
  constructor(private route: ActivatedRoute, private taskService: TaskService){}
  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get("id")
      if(id){
        this.taskService.getTaskById(id).subscribe({
          next: data => this.task = data,
          error: err => console.error("Error fetching task: ", err)
        })
      }
  }

}
