import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Todo } from '../app.component';

@Component({
  selector: 'ilnur-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent {
  public readonly form: FormGroup

  constructor(
    private readonly dialogRef: MatDialogRef<EditTodoComponent>,
    @Inject(MAT_DIALOG_DATA)
    private readonly data: Todo
  ) {
    this.form = new FormGroup({
      title: new FormControl(data.title, [Validators.required]),
      description: new FormControl(data.description)
    })
  }

  public editTodo(): void {
    this.dialogRef.close({
      ...this.form.value,
      id: this.data.id
    } as Todo)
  }

}
