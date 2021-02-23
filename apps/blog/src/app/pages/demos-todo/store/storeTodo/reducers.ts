import { Action, createReducer, on } from "@ngrx/store";
import { TodoStateInterface } from "../../types/todoTypes/todoState.interface";
import { getTodosSuccessAction } from "./actions/getTodo.action";

const initialState: TodoStateInterface = {
  data: null
}

const todoReducer = createReducer(
  initialState,
  on(
    getTodosSuccessAction,
    (state, action): TodoStateInterface => ({
      ...state,
      data: action.todos
    })
  )
)

export function reducer(state: TodoStateInterface, action: Action) {
  return todoReducer(state, action)
}
