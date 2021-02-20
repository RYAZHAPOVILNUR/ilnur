import {createAction, props} from '@ngrx/store'
import { ActionTypes } from '../ActionTypes'
import { GetTodoInterface } from '../../../types/todoTypes/getTodo.interface'

export const getTodoAction = createAction(
  ActionTypes.GET_TODO
)

export const getTodoSuccessAction = createAction(
  ActionTypes.GET_TODO_SUCCESS,
  props<GetTodoInterface>()
)

export const getTodoFailureAction = createAction(ActionTypes.GET_TODO_FAILURE)
