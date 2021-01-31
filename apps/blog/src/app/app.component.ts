import { Component } from '@angular/core';

interface Todo {
  id: number;
  title: string;
  checked: boolean
}

@Component({
  selector: 'ilnur-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blog';

  todos: Todo[] = []
  todoName: string

  createTodo() {
    const newTodo: Todo = {
      id: new Date().getTime(),
      title: this.todoName,
      checked: false
    }

    this.todos.push(newTodo)
  }
}
