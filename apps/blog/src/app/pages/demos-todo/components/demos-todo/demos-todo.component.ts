import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { CreateTodoComponent, CreateTodoModalData } from '../create-todo/create-todo.component';
import { EditTodoComponent, EditTodoModalData } from '../edit-todo/edit-todo.component';
import { TodoInterface } from '../../types/todoTypes/todo.interface';
import { UserInterface } from '../../types/userTypes/user.interface';
import { TodoService } from '../../shared/services/todo.service';
import { select, Store } from '@ngrx/store';
import { getUserAction } from '../../store/storeUser/actions/getUser.action';
import { usersSelector } from '../../store/storeUser/selectors';
import { getTodosAction } from '../../store/storeTodo/actions/getTodo.action';
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
  private readonly user$: Observable<UserInterface> = this.users$.pipe(map(users => users.find(user => user.id === 1)));
  public readonly evaluation$: BehaviorSubject<TodoInterface[]> = new BehaviorSubject<TodoInterface[]>([]);
  public readonly work$: BehaviorSubject<TodoInterface[]> = new BehaviorSubject<TodoInterface[]>([]);
  public readonly review$: BehaviorSubject<TodoInterface[]> = new BehaviorSubject<TodoInterface[]>([]);
  public readonly performed$: BehaviorSubject<TodoInterface[]> = new BehaviorSubject<TodoInterface[]>([]);

  public searchStr = '';
  public usersSubscription$: Subscription
  public userSubscription$: Subscription
  public todosSubscription$: Subscription
  public editTodosSubscription$: Subscription

  constructor(
    public dialog: MatDialog,
    private todoService: TodoService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getUserAction())
    this.store.dispatch(getTodosAction())
    this.fetchData()
  }

  fetchData() {
    this.todos$.pipe(map(todos => {
      if (todos) {
        return todos.filter((todo) => {
          return todo.status == 'evaluation'
        })
      }
    })).subscribe(todos => this.evaluation$.next(todos))

    this.todos$.pipe(map(todos => {
      if (todos) {
        return todos.filter((todo) => {
          return todo.status == 'work'
        })
      }
    })).subscribe(todos => this.work$.next(todos))

    this.todos$.pipe(map(todos => {
      if (todos) {
        return todos.filter((todo) => {
          return todo.status == 'review'
        })
      }
    })).subscribe(todos => this.review$.next(todos))

    this.todos$.pipe(map(todos => {
      if (todos) {
        return todos.filter((todo) => {
          return todo.status == 'performed'
        })
      }
    })).subscribe(todos => this.performed$.next(todos))

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
                console.log(data);
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
    this.todoService.deleteTodo(id)
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    if (event.container.id == 'cdk-drop-list-0') {
      event.container.data.forEach(elemement => {
        const elem = JSON.parse(JSON.stringify(elemement))
        elem.status = 'evaluation'
        this.todoService.updateTodo(elem)
      })
    }
    if (event.container.id == 'cdk-drop-list-1') {
      event.container.data.forEach(elemement => {
        const elem = JSON.parse(JSON.stringify(elemement))
        elem.status = 'work'
        this.todoService.updateTodo(elem)
      })
    }
    if (event.container.id == 'cdk-drop-list-2') {
      event.container.data.forEach(elemement => {
        const elem = JSON.parse(JSON.stringify(elemement))
        elem.status = 'review'
        this.todoService.updateTodo(elem)
      })
    }
    if (event.container.id == 'cdk-drop-list-3') {
      event.container.data.forEach(elemement => {
        const elem = JSON.parse(JSON.stringify(elemement))
        elem.status = 'performed'
        this.todoService.updateTodo(elem)
      })
    }
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
