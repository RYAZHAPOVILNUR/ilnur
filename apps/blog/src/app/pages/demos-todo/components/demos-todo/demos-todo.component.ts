import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { filter, flatMap, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';

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
  public readonly todos$: Observable<TodoInterface[]> = this.store.pipe(select(todoSelector));
  private readonly users$: Observable<UserInterface[]> = this.store.pipe(select(usersSelector));
  private readonly user$: Observable<UserInterface> = this.users$.pipe(
    map(
      users => users.find(
        user => user.id === 1
      )
    )
  );
  public evaluation$: BehaviorSubject<TodoInterface[]> = new BehaviorSubject<TodoInterface[]>([]);
  public work$: BehaviorSubject<TodoInterface[]> = new BehaviorSubject<TodoInterface[]>([]);
  public review$: BehaviorSubject<TodoInterface[]> = new BehaviorSubject<TodoInterface[]>([]);
  public performed$: BehaviorSubject<TodoInterface[]> = new BehaviorSubject<TodoInterface[]>([]);

  public searchStr = '';
  public usersSubscription$: Subscription
  public userSubscription$: Subscription
  public todosSubscription$: Subscription
  public editTodosSubscription$: Subscription

  constructor(
    public dialog: MatDialog,
    private todoService: TodoService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData(): void {
    this.store.dispatch(getUserAction())
    this.store.dispatch(getTodoAction())
    setTimeout(() => {
      this.todos$.pipe(map(todos => todos.filter((todo) => {
        console.log(todo)
        return todo.status == 'evaluation'
      }))).subscribe(todos => this.evaluation$.next(todos))

      this.todos$.pipe(map(todos => todos.filter((todo) => {
        return todo.status == 'work'
      }))).subscribe(todos => this.work$.next(todos))

      this.todos$.pipe(map(todos => todos.filter((todo) => {
        return todo.status == 'review'
      }))).subscribe(todos => this.review$.next(todos))

      this.todos$.pipe(map(todos => todos.filter((todo) => {
        return todo.status == 'performed'
      }))).subscribe(todos => this.performed$.next(todos))
    }, 2000)
    console.log(this.evaluation$);
  }

  public createTodo(): void {
    combineLatest([this.users$, this.user$]).pipe(
      switchMap(
        ([users, currentUser]) => this.dialog.open(
          CreateTodoComponent, {data: {
            users,
            currentUser
          } as CreateTodoModalData}
        ).afterClosed()
        .pipe(
          filter(data => !!data),
          tap((data: TodoInterface) => this.todoService.addTodo(data))
        )
      )
    )
      .subscribe()
  }

  public editTodo(id: string): void {
    this.editTodosSubscription$ = combineLatest([this.todos$, this.users$, this.user$]).pipe(
      switchMap(
        ([todos, users, currentUser]) => this.dialog.open(EditTodoComponent, {
          data: {
            todo: todos.find(  (todo: TodoInterface) => todo.id === id ),
            users,
            currentUser
          } as EditTodoModalData
        })
          .afterClosed()
          .pipe(
            filter((data: TodoInterface) => data != null),
            tap(
              (data: TodoInterface) => {
                this.todoService.updateTodo(data)
                this.editTodosSubscription$.unsubscribe()
              }
            )
          )
      )
    )
      .subscribe()
  }

  public removeTodo(id: string) {
    // event.stopPropagation()
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

    if (this.editTodosSubscription$) {
      this.editTodosSubscription$.unsubscribe()
    }
  }

}
