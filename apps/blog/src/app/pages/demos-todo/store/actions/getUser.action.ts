import {createAction, props} from '@ngrx/store'
import { ActionTypes } from '../ActionTypes'
import {GetUsersInterface} from '../../types/getUsers.interface'

export const getUserAction = createAction(
  ActionTypes.GET_USER
)

export const getUserSuccessAction = createAction(
  ActionTypes.GET_USER_SUCCESS,
  props<GetUsersInterface>()
)

export const getUserFailureAction = createAction(ActionTypes.GET_USER_FAILURE)
