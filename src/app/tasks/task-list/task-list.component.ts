import { TaskService } from './../shared/task.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router'
import { Task } from '../shared/task';
import { TaskListItemComponent } from "../task-list-item/task-list-item.component";

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, TaskListItemComponent, RouterLink],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[] = [];
  constructor(private taskService: TaskService){
    this.tasks = this.taskService.getAll();

  }
}

