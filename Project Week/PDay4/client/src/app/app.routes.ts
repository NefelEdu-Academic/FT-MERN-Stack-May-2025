import { Routes } from '@angular/router';
import { DisplayTasksComponent } from './display-tasks/display-tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';

export const routes: Routes = [
    {path:"", component: DisplayTasksComponent},
    {path:"new", component: CreateTaskComponent},
    {path:"show/:id", component: ShowTaskComponent},
    {path:"edit/:id", component: UpdateTaskComponent},
];
