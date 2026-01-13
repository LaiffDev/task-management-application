import { Injectable } from '@angular/core';
import { TaskData } from '../models/task-data';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  AddNewTask(taskData: TaskData[]) {
    localStorage.setItem('tasks', JSON.stringify(taskData));
  }
}
