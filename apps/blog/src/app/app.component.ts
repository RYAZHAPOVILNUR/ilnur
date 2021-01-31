import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { tap } from 'rxjs/operators';
import { EditTodoComponent } from './edit-todo/edit-todo.component';

export interface Todo {
  id: number;
  title: string;
  description: string;
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

  constructor(public dialog: MatDialog) {}

  public createTodo(): void {
    this.dialog.open(CreateTodoComponent)
      .afterClosed()
      .pipe(
        tap((data: Todo) => this.todos$.next([
          ...this.todos$.value,
          data
        ]))
      )
      .subscribe()
  }

  public editTodo(id: number): void {
    this.dialog.open(EditTodoComponent, {
      data: this.todos$.value.find(
        (todo: Todo) => todo.id === id
      )
    })
      .afterClosed()
      .pipe(
        tap((data: Todo) => this.todos$.next(
          this.todos$.value.map(
            (todo: Todo) => todo.id === data.id
              ? {...todo, ...data}
              : todo
          )
        ))
      )
      .subscribe()
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
}
