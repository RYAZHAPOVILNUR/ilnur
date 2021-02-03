import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class CreateTodoComponent implements OnInit, OnDestroy{
  public form: FormGroup
  public users: User[]
  public user: User
  public userSub
  public usersSub

  constructor(
    private readonly dialogRef: MatDialogRef<CreateTodoComponent>,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userSub = this.userService.currentUser.subscribe(user => {
      this.user = user
    })
    this.usersSub = this.userService.getUsers.subscribe(users => {
      this.users = users
    })

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      priority: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      created: new FormControl(new Date(new Date().getTime())),
      reporterId: new FormControl(this.user.id,[Validators.required]),
      assigneesIds: new FormControl([]),
      updated: new FormControl(''),
      comments: new FormControl([]),
      comment: new FormGroup({
        authorId: new FormControl(this.user.id),
        text: new FormControl('')
      })
    })
  }

  public createTodo(): void {
    this.dialogRef.close({
      id: new Date().getTime(),
      ...this.form.value
    } as Todo)
  }

  ngOnDestroy() {
    if(this.userSub) {
      this.userSub.unsubscribe()
    }

    if(this.usersSub) {
      this.usersSub.unsubscribe()
    }
  }

}
