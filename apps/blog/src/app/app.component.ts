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

    if(this.todoName.trim()) {
      this.todos.push(newTodo)
    }
    this.todoName = ''
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id != id)
  }

  onChange(id: number) {
    this.todos.map(todo => {
      if(todo.id == id) {
        todo.checked = !todo.checked
      }
    })
  }
}
