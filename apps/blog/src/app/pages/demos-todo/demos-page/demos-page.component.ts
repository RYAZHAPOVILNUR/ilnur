import { Component} from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/users';
import { Todo } from '../demos-todo.component';


@Component({
  selector: 'demos-page',
  templateUrl: './demos-page.component.html',
  styleUrls: ['./demos-page.component.scss']
})
export class DemosPageComponent {
  public readonly form: FormGroup
  public readonly commentForm: FormGroup
  public readonly todo$: BehaviorSubject<Todo> = new BehaviorSubject<Todo>(null);
  public readonly user$: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  public readonly users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  public readonly isShowedCommentButtons$: BehaviorSubject<boolean> = new BehaviorSubject(false)

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.route.queryParams.subscribe((params: Todo) => {
      this.todo$.next(params)
      console.log(this.todo$.value)
    })
    this.userService.currentUser.subscribe((user: User) => {
      this.user$.next(user)
    })
    this.userService.getUsers.subscribe((users: User[]) => {
      this.users$.next(users)
      console.log(this.users$.value)
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




  public removeComment(comTime): void {
    let newComments = this.todo$.value.comments.filter(
      comment => comment.time != comTime
    )
    console.log('esf')
    this.todo$.next({
      ...this.todo$.value,
      comments: [
        ...newComments
      ]
    })
  }

  public get reporter(): User {
    return this.users$.value.find(
      user => user.id == this.todo$.value.reporterId
    )
  }

  public showCommentButton(): void {
    this.isShowedCommentButtons$.next(true)
  }

}
