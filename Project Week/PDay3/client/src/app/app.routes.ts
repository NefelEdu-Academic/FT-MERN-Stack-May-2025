import { Routes } from '@angular/router';
import { DisplayTasksComponent } from './display-tasks/display-tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';

export const routes: Routes = [
    {path:"", component: DisplayTasksComponent},
    {path:"new", component: CreateTaskComponent},
];
