import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CreateTodoModalData } from '../create-todo/create-todo.component';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { UserInterface } from '../../types/userTypes/user.interface';
import { TodoInterface } from '../../types/todoTypes/todo.interface';
import { CommentInterface } from '../../types/comment.interface';

export interface EditTodoModalData extends CreateTodoModalData {
  todo: TodoInterface
}

@Component({
  selector: 'ilnur-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent {
  public readonly form: FormGroup
  public readonly commentForm: FormGroup
  public readonly users$: BehaviorSubject<UserInterface[]> = new BehaviorSubject<UserInterface[]>([])
  public readonly todo$: BehaviorSubject<TodoInterface> = new BehaviorSubject<TodoInterface>(null)
  public readonly isShowedCommentButtons$: BehaviorSubject<boolean> = new BehaviorSubject(false)

  constructor(
    private readonly dialogRef: MatDialogRef<EditTodoComponent>,
    @Inject(MAT_DIALOG_DATA)
    private readonly data: EditTodoModalData,
    private router: Router
  ) {
    this.users$.next(data.users);
    this.todo$.next(data.todo);
    this.form = new FormGroup({
      title: new FormControl(this.data.todo.title, [Validators.required]),
      priority: new FormControl(this.data.todo.priority),
      status: new FormControl(this.data.todo.status),
      description: new FormControl(this.data.todo.description),
      assigneesId: new FormControl(this.data.todo.assigneesId)
    });
    this.commentForm = new FormGroup({
      authorId: new FormControl(this.reporter.name),
      text: new FormControl('', [Validators.required])
    });
  }

  public addComment(event): void {
    event.preventDefault()
    event.stopPropagation()
    if (this.commentForm.value.text) {
      const newComment: CommentInterface = {
        authorId: this.commentForm.value.authorId,
        text: this.commentForm.value.text,
        time: new Date().getTime()
      }

      this.todo$.next({
        ...this.todo$.value,
        comments: [
          ...this.todo$.value.comments,
          newComment
        ]
      })

      this.commentForm.get('text').reset()
    }
    this.isShowedCommentButtons$.next(false)
  }

  public removeComment(commentTime): void {
    let newComments = this.todo$.value.comments.filter(
      comment => comment.time != commentTime
    )

    this.todo$.next({
      ...this.todo$.value,
      comments: [
        ...newComments
      ]
    })
  }

  public cancelComment() {
    this.commentForm.get('text').reset();
    this.isShowedCommentButtons$.next(false);
  }

  public editComment(commentText): void {
    let newComments = this.todo$.value.comments.filter(
      comment => comment.text != commentText
    )

    this.todo$.next({
      ...this.todo$.value,
      comments: [
        ...newComments
      ]
    })
    this.commentForm.patchValue({ text: commentText })
  }

  public editTodo(): void {
    this.dialogRef.close({
      ...this.todo$.value,
      ...this.form.value,
      id: this.data.todo.id,
      updated: new Date().getTime()
    } as TodoInterface)
  }

  public showCommentButton(): void {
    this.isShowedCommentButtons$.next(true)
  }

  public sendingData(id: string): void {
    this.router.navigate(['/demos', id], { state: this.todo$.value })
    this.editTodo()
  }

  public get reporter(): UserInterface {
    return this.users$.value.find(
      user => user.id == this.todo$.value.reporterId
    )
  }

  public get commentsAdded(): boolean {
    return this.todo$.value.comments.length !== this.data.todo.comments.length
  }
}


