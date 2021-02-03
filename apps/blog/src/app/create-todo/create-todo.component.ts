import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Todo } from '../demos-todo/demos-todo.component';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/users'

@Component({
  selector: 'ilnur-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {
  public readonly form: FormGroup
  public users: User[]
  public user: User

  constructor(
    private readonly dialogRef: MatDialogRef<CreateTodoComponent>,
    private userService: UserService
  ) {
    this.userService.currentUser.subscribe(user => {
      this.user = user
    })

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      priority: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      created: new FormControl(new Date(new Date().getTime())),
      comment: new FormGroup({
        authorId: new FormControl(this.user.id),
        text: new FormControl('geese')
      })
    })
  }

  public createTodo(): void {
    this.dialogRef.close({
      id: new Date().getTime(),
      ...this.form.value
    } as Todo)
  }

}
