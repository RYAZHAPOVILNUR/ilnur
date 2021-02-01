import {ChangeDetectionStrategy, Component} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs/operators';
import { CreateTodoComponent } from '../create-todo/create-todo.component';
import { EditTodoComponent } from '../edit-todo/edit-todo.component';
// import {COMMA, ENTER} from '@angular/cdk/keycodes';
// import {MatChipInputEvent} from '@angular/material/chips';

export interface Tags {
  name: string;
}

export interface Todo {
  id: number;
  title: string;
  description: string;
  priority: string,
  changeDetection: ChangeDetectionStrategy.OnPush
}

@Component({
  selector: 'ilnur-demos-todo',
  templateUrl: './demos-todo.component.html',
  styleUrls: ['./demos-todo.component.scss']
})
export class DemosTodoComponent {
  readonly title = 'blog';
  public readonly todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  searchStr = ''
  constructor(public dialog: MatDialog) {}


  // visible = true;
  // selectable = true;
  // removable = true;
  // addOnBlur = true;
  // readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  // fruits: Tags[] = [
  //   {name: 'Lemon'},
  //   {name: 'Lime'},
  //   {name: 'Apple'},
  // ];

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

  // public add(event: MatChipInputEvent): void {
  //   const input = event.input;
  //   const value = event.value;

  //   // Add our fruit
  //   if ((value || '').trim()) {
  //     this.fruits.push({name: value.trim()});
  //   }

  //   // Reset the input value
  //   if (input) {
  //     input.value = '';
  //   }
  // }

  // public remove(fruit: Tags): void {
  //   const index = this.fruits.indexOf(fruit);

  //   if (index >= 0) {
  //     this.fruits.splice(index, 1);
  //   }
  // }

  // public onChange(id: number) {
  //   this.todos$.next(
  //     this.todos$.value.map(
  //       todo => todo.id === id
  //         ? {...todo, checked: !todo.checked}
  //         : todo
  //     )
  //   )
  // }
}
