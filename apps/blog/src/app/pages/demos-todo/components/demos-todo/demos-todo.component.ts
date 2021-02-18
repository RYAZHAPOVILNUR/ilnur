import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { filter, map, tap } from 'rxjs/operators';

import { UserService } from '../../shared/services/user.service';
import { CreateTodoComponent, CreateTodoModalData } from '../create-todo/create-todo.component';
import { EditTodoComponent, EditTodoModalData } from '../edit-todo/edit-todo.component';
import { TodoInterface } from '../../types/todo.interface';
import { UserInterface } from '../../types/user.interface';
import { TodoService } from '../../shared/services/todo.service';
import { select, Store } from '@ngrx/store';
import { getUserAction } from '../../store/actions/getUser.action';
import { usersSelector } from '../../store/selectors';


@Component({
  selector: 'ilnur-demos-todo',
  templateUrl: './demos-todo.component.html',
  styleUrls: ['./demos-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemosTodoComponent implements OnInit{
  public readonly todos$: BehaviorSubject<TodoInterface[]> = new BehaviorSubject<TodoInterface[]>([]);
  private readonly user$: BehaviorSubject<UserInterface> = new BehaviorSubject<UserInterface>(null);
  private readonly users$: BehaviorSubject<UserInterface[]> = new BehaviorSubject<UserInterface[]>([]);
  public searchStr = '';
  public profiles$: Observable<UserInterface[] | null>
  public profile: UserInterface

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private todoService: TodoService,
    private store: Store
  ) {
    this.todoService.collection.snapshotChanges()
      .pipe(
        map(
          (actions) => actions.map(
            (action) => ({
              ...action.payload.doc.data(),
              id: action.payload.doc.id
            })
          )
        )
      )
      .subscribe((todos: TodoInterface[]) => this.todos$.next(todos))



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

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  initializeValues(): void {
    this.profiles$ = this.store.pipe(select(usersSelector))
  }

  fetchData(): void {
    this.store.dispatch(getUserAction())
  }

  public createTodo(): void {
    this.dialog.open(
      CreateTodoComponent, {data: {
        users: this.users$.value,
        currentUser: this.user$.value
      } as CreateTodoModalData}
    ).afterClosed()
    .pipe(
      filter(data => !!data),
      tap((data: TodoInterface) => this.todoService.addTodo(data))
    )
      .subscribe()
  }

  public editTodo(id: string): void {
    this.dialog.open(EditTodoComponent, {
      data: {
        todo: this.todos$.value.find(
          (todo: TodoInterface) => todo.id === id
        ),
        users: this.users$.value,
        currentUser: this.user$.value
      } as EditTodoModalData
    })
      .afterClosed()
      .pipe(
        filter((data: TodoInterface) => data != null),
        tap(
          (data: TodoInterface) => this.todoService.updateTodo(data)
        )
      )
      .subscribe()
  }

  public removeTodo(id: string, event) {
    event.stopPropagation()
    this.todoService.deleteTodo(id)
  }


}
