import {ChangeDetectionStrategy, Component} from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { CreateTodoComponent, CreateTodoModalData } from './create-todo/create-todo.component';
import { EditTodoComponent, EditTodoModalData } from './edit-todo/edit-todo.component';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/users';

export interface Comment {
  authorId: number;
  text: string;
}

export interface Todo {
  id: number;
  title: string;
  description: string;
  priority: string,
  comments: Comment[],
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
  public readonly todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  private readonly user$: BehaviorSubject<User> = new BehaviorSubject<User>(null)
  private readonly users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([])
  public searchStr = ''

  constructor(
    public dialog: MatDialog,
    private userService: UserService
  ) {
    combineLatest([
      this.userService.getUsers,
      this.userService.currentUser
    ])
      .pipe(
        tap(([users, user]) => {
          this.user$.next(user)
          this.users$.next(users)
        })
      ).subscribe()
  }

  public createTodo(): void {
    this.dialog.open(
      CreateTodoComponent, {data: {
        users: this.users$.value,
        currentUser: this.user$.value
      } as CreateTodoModalData}
    ).afterClosed()
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
      data: {
        todo: this.todos$.value.find(
          (todo: Todo) => todo.id === id
        ),
        users: this.users$.value,
        currentUser: this.user$.value
      } as EditTodoModalData
    })
      .afterClosed()
      .pipe(
        filter((data: Todo) => data != null),
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
