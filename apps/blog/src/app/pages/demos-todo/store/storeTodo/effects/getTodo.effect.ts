import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap} from 'rxjs/operators'
import {of} from 'rxjs'

import { getTodosAction, getTodosFailureAction, getTodosSuccessAction } from '../actions/getTodo.action'
import { TodoService } from '../../../shared/services/todo.service'
import { TodoInterface } from '../../../types/todoTypes/todo.interface'

@Injectable()
export class GetTodosEffect {
  getTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTodosAction),
      switchMap(() => {
        return this.todoService.todos.pipe(
          map((todos: TodoInterface[]) => {
            return getTodosSuccessAction({todos})
          }),
          catchError(() => {
            return of(getTodosFailureAction())
          })
        )
      })
    )
  )

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
