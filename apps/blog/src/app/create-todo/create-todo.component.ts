import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Todo } from '../demos-todo/demos-todo.component';

@Component({
  selector: 'ilnur-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {
  public readonly form: FormGroup

  constructor(
    private readonly dialogRef: MatDialogRef<CreateTodoComponent>
  ) {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      priority: new FormControl('', [Validators.required]),
      description: new FormControl('')
    })
  }

  public createTodo(): void {
    this.dialogRef.close({
      id: new Date().getTime(),
      ...this.form.value
    } as Todo)
  }
}
