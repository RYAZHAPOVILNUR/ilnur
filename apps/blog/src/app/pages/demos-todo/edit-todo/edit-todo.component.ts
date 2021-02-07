import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Todo } from '../demos-todo.component';
import { User } from '../../../shared/users';
import { CreateTodoModalData } from '../create-todo/create-todo.component';
import { BehaviorSubject } from 'rxjs';

export interface EditTodoModalData extends CreateTodoModalData {
  todo: Todo
}

@Component({
  selector: 'ilnur-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent {
  public readonly form: FormGroup
  public readonly users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([])
  public readonly todo$: BehaviorSubject<Todo> = new BehaviorSubject<Todo>(null)
  public readonly isShowedCommentButtons$: BehaviorSubject<boolean> = new BehaviorSubject(false)


  constructor(
    private readonly dialogRef: MatDialogRef<EditTodoComponent>,
    @Inject(MAT_DIALOG_DATA)
    private readonly data: EditTodoModalData
  ) {
    this.users$.next(data.users);
    this.todo$.next(data.todo)
    this.form = new FormGroup({
      title: new FormControl(this.data.todo.title, [Validators.required]),
      priority: new FormControl(this.data.todo.priority),
      description: new FormControl(this.data.todo.description),
      updated: new FormControl(new Date(new Date().getTime())),
      assigneesIds: new FormControl(this.data.todo.assigneesIds),
      comments: new FormControl(this.data.todo.comments),
      comment: new FormGroup({
        authorId: new FormControl(this.reporter.name),
        text: new FormControl('', [Validators.required])
      })
    })
  }

  public addComment(): void {
    if(this.form.value.comment.text) {
      this.form.patchValue({
        comments: [
          ...this.form.get('comments').value,
          {
            authorId: this.form.value.comment.authorId,
            text: this.form.value.comment.text,
            time: new Date(new Date().getTime())
          }
        ]
      })

      const formComment = this.form.get('comment.text') as FormGroup;
      formComment.reset();
    }
    this.isShowedCommentButtons$.next(false)
  }

  public cancelComment() {
    const formComment = this.form.get('comment.text') as FormGroup;
    formComment.reset();
    this.isShowedCommentButtons$.next(false);
  }

  public editTodo(): void {
    this.dialogRef.close({
      ...this.form.value,
      id: this.data.todo.id
    } as Todo)
  }



  public toggleShowCommentButtons(): void {
    this.isShowedCommentButtons$.next(
      !this.isShowedCommentButtons$.value
    )
  }

  public get reporter(): User {
    return this.users$.value.find(
      user => user.id == this.todo$.value.reporterId
    )
  }
}


