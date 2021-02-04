import {ChangeDetectionStrategy, Component} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs/operators';
import { CreateTodoComponent } from '../../create-todo/create-todo.component';
import { EditTodoComponent } from '../../edit-todo/edit-todo.component';
import { UserService } from '../../shared/services/user.service';

export interface Comment {
  authorId: number;
  text: string;
}

export interface Todo {
  id: number;
  title: string;
  description: string;
  priority: string,
  comment: Comment,
  comments: [],
  reporterId: number,
  assigneesIds: number[],
  created: number,
  updated: number,
}

@Component({
  selector: 'ilnur-demos-todo',
  templateUrl: './demos-todo.component.html',
  styleUrls: ['./demos-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DemosTodoComponent {
  readonly title = 'blog';
  public readonly todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  searchStr = ''
  constructor(public dialog: MatDialog, public userService: UserService) {}

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
}
