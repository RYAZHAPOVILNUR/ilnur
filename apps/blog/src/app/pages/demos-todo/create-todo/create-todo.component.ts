import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Todo } from '../demos-todo.component';
import { User } from '../../../shared/users'

export interface CreateTodoModalData {
  users: User[],
  currentUser: User
}

@Component({
  selector: 'ilnur-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {
  public readonly form: FormGroup
  public readonly users: User[]
  public readonly user: User

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private readonly data: CreateTodoModalData,
    private readonly dialogRef: MatDialogRef<CreateTodoComponent>
  ) {
    this.users = data.users
    this.user = data.currentUser

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      priority: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      created: new FormControl(new Date(new Date().getTime())),
      reporterId: new FormControl('',[Validators.required]),
      assigneesIds: new FormControl([]),
      comments: new FormControl([])
    })
  }

  public createTodo(): void {
    this.dialogRef.close({
      id: new Date().getTime(),
      ...this.form.value
    } as Todo)
  }

}
