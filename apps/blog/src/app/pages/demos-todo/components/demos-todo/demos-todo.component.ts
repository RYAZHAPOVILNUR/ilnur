import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { filter, map, tap } from 'rxjs/operators';

import { CreateTodoComponent, CreateTodoModalData } from '../create-todo/create-todo.component';
import { EditTodoComponent, EditTodoModalData } from '../edit-todo/edit-todo.component';
import { TodoInterface } from '../../types/todoTypes/todo.interface';
import { UserInterface } from '../../types/userTypes/user.interface';
import { TodoService } from '../../shared/services/todo.service';
import { select, Store } from '@ngrx/store';
import { getUserAction } from '../../store/storeUser/actions/getUser.action';
import { usersSelector } from '../../store/storeUser/selectors';
import { getTodoAction } from '../../store/storeTodo/actions/getTodo.action';
import { todoSelector } from '../../store/storeTodo/selectors';


@Component({
  selector: 'ilnur-demos-todo',
  templateUrl: './demos-todo.component.html',
  styleUrls: ['./demos-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemosTodoComponent implements OnInit, OnDestroy{
  public readonly todos$: BehaviorSubject<TodoInterface[]> = new BehaviorSubject<TodoInterface[]>([]);
  private readonly user$: BehaviorSubject<UserInterface> = new BehaviorSubject<UserInterface>(null);
  private readonly users$: BehaviorSubject<UserInterface[]> = new BehaviorSubject<UserInterface[]>([]);
  public searchStr = '';
  public usersSubscription$: Subscription
  public userSubscription$: Subscription
  public todosSubscription$: Subscription

  constructor(
    public dialog: MatDialog,
    private todoService: TodoService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()

    this.userSubscription$ = this.users$.pipe(
      map((user) => user.filter(user => user.id === 1))
    ).subscribe((user) => this.user$.next(user[0]))
  }

  initializeValues(): void {
    this.usersSubscription$ = this.store.pipe(select(usersSelector))
      .subscribe((users: UserInterface[]) => this.users$.next(users))

    this.todosSubscription$ = this.store.pipe(select(todoSelector))
      .subscribe((todos: TodoInterface[]) => this.todos$.next(todos))
  }

  fetchData(): void {
    this.store.dispatch(getUserAction())
    this.store.dispatch(getTodoAction())
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

  ngOnDestroy(): void {
    if (this.usersSubscription$) {
      this.usersSubscription$.unsubscribe()
    }

    if (this.userSubscription$) {
      this.userSubscription$.unsubscribe()
    }

    if (this.todosSubscription$) {
      this.todosSubscription$.unsubscribe()
    }
  }

}
