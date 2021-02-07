import {ChangeDetectionStrategy, Component} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { filter, map, tap } from 'rxjs/operators';
import { CreateTodoComponent, CreateTodoModalData } from './create-todo/create-todo.component';
import { EditTodoComponent, EditTodoModalData } from './edit-todo/edit-todo.component';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/users';

const COLLECTION_NAME = 'tasks'

export interface Comment {
  authorId: number;
  text: string;
  time: string;
}

export interface Todo {
  id: string;
  title: string;
  description: string;
  priority: string,
  comments: Comment[],
  reporterId: number,
  assigneesId: number,
  created: Date,
  updated: Date,
}

@Component({
  selector: 'ilnur-demos-todo',
  templateUrl: './demos-todo.component.html',
  styleUrls: ['./demos-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DemosTodoComponent {
  public readonly todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  private readonly user$: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  private readonly users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  public searchStr = '';

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private firestore: AngularFirestore
  ) {
    this.collection.snapshotChanges()
      .pipe(
        map(
          (actions) => actions.map(
            (action) => ({
              ...action.payload.doc.data(),
              id: action.payload.doc.id
            })
          )
        ),
        tap(console.log)
      )
      .subscribe((todos: Todo[]) => this.todos$.next(todos))

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
      tap((data: Todo) => this.collection.add(data))
    )
      .subscribe()
  }

  public editTodo(id: string): void {
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
        tap(
          (data: Todo) => this.firestore.doc(`${COLLECTION_NAME}/${data.id}`).update(data)
        )
      )
      .subscribe()
  }

  public removeTodo(id: string, event) {
    event.stopPropagation()
    console.log({id})
    this.firestore.doc(`${COLLECTION_NAME}/${id}`).delete()
  }

  private get collection(): AngularFirestoreCollection<Todo> {
    return this.firestore.collection(COLLECTION_NAME)
  }
}
