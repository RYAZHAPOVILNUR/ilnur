import {createAction, props} from '@ngrx/store'
import { ActionTypes } from '../ActionTypes'
import { GetTodosInterface } from '../../../types/todoTypes/getTodo.interface'

export const getTodosAction = createAction(
  ActionTypes.GET_TODOS
)

export const getTodosSuccessAction = createAction(
  ActionTypes.GET_TODOS_SUCCESS,
  props<GetTodosInterface>()
)

export const getTodosFailureAction = createAction(ActionTypes.GET_TODOS_FAILURE)
