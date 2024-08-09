import { Component } from '@angular/core';
import { Task } from '../shared/task';
import { ActivatedRoute, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { TaskService } from '../shared/task.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, RouterOutlet, RouterLink],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  task: Task = new Task();
  title: string = 'Nova Tarefa';

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
  ){
    const id = this.activateRoute.snapshot.paramMap.get('id');
    if(id){
      this.task = this.taskService.getById(parseInt(id)) ?? new Task();
      this.title = 'Alterando tarefa';
    }
  }

  onSubmit() : void{
    this.taskService.save(this.task);
    this.router.navigate(['']);
  }
}
