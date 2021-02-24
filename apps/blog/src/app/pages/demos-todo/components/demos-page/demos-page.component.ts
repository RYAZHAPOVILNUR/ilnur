import {Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { CommentInterface } from '../../types/comment.interface';
import { TodoInterface } from '../../types/todoTypes/todo.interface';
import { UserInterface } from '../../types/userTypes/user.interface';
import { UserService } from '../../shared/services/user.service'
import { TodoService } from '../../shared/services/todo.service';


@Component({
  selector: 'demos-page',
  templateUrl: './demos-page.component.html',
  styleUrls: ['./demos-page.component.scss']
})
export class DemosPageComponent implements OnInit{
  public form: FormGroup
  public commentForm: FormGroup
  public readonly todo$: BehaviorSubject<TodoInterface> = new BehaviorSubject<TodoInterface>(null);
  public readonly user$: BehaviorSubject<UserInterface> = new BehaviorSubject<UserInterface>(null);
  public readonly users$: BehaviorSubject<UserInterface[]> = new BehaviorSubject<UserInterface[]>([]);
  public readonly isShowedCommentButtons$: BehaviorSubject<boolean> = new BehaviorSubject(false)
  public readonly data$: BehaviorSubject<TodoInterface> = new BehaviorSubject<TodoInterface>(null);

  constructor(
    private todoService: TodoService,
    private userService: UserService,
  ) {
    this.todo$.next(history.state)

    this.userService.currentUser.subscribe((user: UserInterface) => {
      this.user$.next(user)
    })
    this.userService.getUsers.subscribe((users: UserInterface[]) => {
      this.users$.next(users)
    })

  }

  public ngOnInit(): void {
    this.fetchData()
  }

  public fetchData(): void {
    this.form = new FormGroup({
      title: new FormControl(this.todo$.value.title, [Validators.required]),
      priority: new FormControl(this.todo$.value.priority),
      status: new FormControl(this.todo$.value.status),
      description: new FormControl(this.todo$.value.description),
      assigneesId: new FormControl(this.todo$.value.assigneesId)
    });
    this.commentForm = new FormGroup({
      authorId: new FormControl(this.user$.value.name),
      text: new FormControl('', [Validators.required])
    });
  }

  public editTodo(): void {
    let data = {
      ...this.todo$.value,
      ...this.form.value,
      updated: new Date().getTime()
    }
    this.todoService.updateTodo(data)
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
    this.editTodo()
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

  public removeComment(comTime): void {
    let newComments = this.todo$.value.comments.filter(
      comment => comment.time != comTime
    )
    this.todo$.next({
      ...this.todo$.value,
      comments: [
        ...newComments
      ]
    })
    this.editTodo()
  }

  public cancelComment() {
    this.commentForm.get('text').reset();
    this.isShowedCommentButtons$.next(false);
  }

  public showCommentButton(): void {
    this.isShowedCommentButtons$.next(true)
  }

  // public get commentsAdded(): boolean {
  //   return this.todo$.value.comments.length !== this.data$.value.comments.length
  // }

}
