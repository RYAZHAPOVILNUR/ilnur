import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap} from 'rxjs/operators'
import {of} from 'rxjs'

import { UserService } from '../../../shared/services/user.service'
import { getUserAction, getUserFailureAction, getUserSuccessAction } from '../actions/getUser.action'
import { UserInterface } from '../../../types/userTypes/user.interface'

@Injectable()
export class GetUserEffect {
  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserAction),
      switchMap(() => {
        return this.userService.getUserss().pipe(
          map((users: UserInterface[]) => {
            return getUserSuccessAction({users})
          }),

          catchError(() => {
            return of(getUserFailureAction())
          })
        )
      })
    )
  )

  constructor(private actions$: Actions, private userService: UserService) {}
}
