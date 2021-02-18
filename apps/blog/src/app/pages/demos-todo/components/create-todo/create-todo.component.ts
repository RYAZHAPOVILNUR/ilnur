import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TodoInterface } from '../../types/todo.interface';
import {UserInterface } from '../../types/user.interface'

export interface CreateTodoModalData {
  users: UserInterface[],
  currentUser: UserInterface
}

@Component({
  selector: 'ilnur-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {
  public readonly form: FormGroup
  public readonly users: UserInterface[]
  public readonly user: UserInterface

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
      reporterId: new FormControl('',[Validators.required]),
      assigneesId: new FormControl(''),
      comments: new FormControl([])
    })
  }

  public createTodo(): void {
    this.dialogRef.close({
      ...this.form.value,
      created: new Date().getTime()
    } as TodoInterface)
  }

}
