import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}
  private todos: string[] = [];
  // додати todo завдання
  addTask(task: string) {
    this.todos.push(task);
  }
  //oтримати список
  getTasks(): string[] {
    return this.todos;
  }
  //видалити
  removeTask(index: number) {
    this.todos.splice(index, 1);
  }
  //очистити
  clearTasks() {
    this.todos = [];
  }
}
