import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Todo {
  id: number;
  title: string;
  checked: boolean
}

@Component({
  selector: 'ilnur-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly title = 'blog';
  public readonly todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  public readonly todoName$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public createTodo() {
    const newTodo: Todo = {
      id: new Date().getTime(),
      title: this.todoName$.value,
      checked: false
    }

    if(this.todoName$.value.trim()) {
      this.todos$.next([
        ...this.todos$.value,
        newTodo
      ]);
    }
    this.todoName$.next('');
  }

  public removeTodo(id: number) {
    this.todos$.next(
      this.todos$.value.filter(todo => todo.id != id)
    )
  }

  public onChange(id: number) {
    this.todos$.next(
      this.todos$.value.map(
        todo => todo.id === id
          ? {...todo, checked: !todo.checked}
          : todo
      )
    )
  }

  public todoNameChanged(event: Event) {
    this.todoName$.next((event.target as HTMLInputElement).value)
  }
}
