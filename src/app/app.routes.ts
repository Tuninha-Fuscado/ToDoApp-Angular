import { TaskFormComponent } from './tasks/task-form/task-form.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { Routes } from '@angular/router';


export const routes: Routes = [
  {path: '', component: TaskListComponent},
  {path: 'new', component: TaskFormComponent},
  {path: 'edit/:id', component: TaskFormComponent}
];

