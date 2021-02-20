import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap} from 'rxjs/operators'
import {of} from 'rxjs'

import { getTodoAction, getTodoFailureAction, getTodoSuccessAction } from '../actions/getTodo.action'
import { TodoService } from '../../../shared/services/todo.service'
import { TodoInterface } from '../../../types/todoTypes/todo.interface'

@Injectable()
export class GetTodoEffect {
  getTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTodoAction),
      switchMap(() => {
        return this.todoService.getTodo().pipe(
          map((todos: TodoInterface[]) => {
            return getTodoSuccessAction({todos})
          }),
          catchError(() => {
            return of(getTodoFailureAction())
          })
        )
      })
    )
  )

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
