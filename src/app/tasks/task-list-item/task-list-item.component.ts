import { Task } from './../shared/task';
import { Component, Input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-list-item',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, RouterOutlet, RouterLink, NgClass],
  templateUrl: './task-list-item.component.html',
  styleUrl: './task-list-item.component.css'
})
export class TaskListItemComponent {
  @Input()
  task!: Task;

  constructor(private taskService: TaskService){}

  remove(task: Task){
    this.taskService.delete(task.id);
  }

  onCompletedCheckChange(task: Task){
    this.taskService.save(task);
  }
}
