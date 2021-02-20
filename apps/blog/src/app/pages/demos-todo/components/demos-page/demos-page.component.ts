import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { CommentInterface } from '../../types/comment.interface';
import { TodoInterface } from '../../types/todoTypes/todo.interface';
import { UserInterface } from '../../types/userTypes/user.interface';
import { UserService } from '../../shared/services/user.service'

const COLLECTION_NAME = 'tasks'

@Component({
  selector: 'demos-page',
  templateUrl: './demos-page.component.html',
  styleUrls: ['./demos-page.component.scss']
})
export class DemosPageComponent {
  public readonly form: FormGroup
  public readonly commentForm: FormGroup
  public readonly todo$: BehaviorSubject<TodoInterface> = new BehaviorSubject<TodoInterface>(null);
  public readonly user$: BehaviorSubject<UserInterface> = new BehaviorSubject<UserInterface>(null);
  public readonly users$: BehaviorSubject<UserInterface[]> = new BehaviorSubject<UserInterface[]>([]);
  public readonly isShowedCommentButtons$: BehaviorSubject<boolean> = new BehaviorSubject(false)
  public readonly data$: BehaviorSubject<TodoInterface> = new BehaviorSubject<TodoInterface>(null);

  constructor(
    private userService: UserService,
    private firestore: AngularFirestore,
  ) {

    this.data$.next(history.state)
    this.todo$.next(this.data$.value)
    this.userService.currentUser.subscribe((user: UserInterface) => {
      this.user$.next(user)
    })
    this.userService.getUsers.subscribe((users: UserInterface[]) => {
      this.users$.next(users)
    })

    this.form = new FormGroup({
      title: new FormControl(this.todo$.value.title, [Validators.required]),
      priority: new FormControl(this.todo$.value.priority),
      description: new FormControl(this.todo$.value.description),
      assigneesId: new FormControl(this.todo$.value.assigneesId)
    });
    this.commentForm = new FormGroup({
      authorId: new FormControl(this.reporter.name),
      text: new FormControl('', [Validators.required])
    });
  }

  public editTodo(id: string): void {
    let data = {
      ...this.todo$.value,
      ...this.form.value,
      id: id,
      updated: new Date().getTime()
    }
    this.firestore.doc(`${COLLECTION_NAME}/${data.id}`).update(data)
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
  }

  public cancelComment() {
    this.commentForm.get('text').reset();
    this.isShowedCommentButtons$.next(false);
  }

  public get reporter(): UserInterface {
    return this.users$.value.find(
      user => user.id == this.todo$.value.reporterId
    )
  }

  public showCommentButton(): void {
    this.isShowedCommentButtons$.next(true)
  }

  public get commentsAdded(): boolean {
    return this.todo$.value.comments.length !== this.data$.value.comments.length
  }

}