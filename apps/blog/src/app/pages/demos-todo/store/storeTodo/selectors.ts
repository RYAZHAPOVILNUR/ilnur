import { createSelector } from "@ngrx/store"
import { createFeatureSelector } from "@ngrx/store"
import { TodoState } from ".."
import { AppStateInterface } from "../../types/appState.interface"
import { TodoStateInterface } from "../../types/todoTypes/todoState.interface"

export const todoFeatureSelector = createFeatureSelector<
  AppStateInterface,
  TodoState
>('todos')

export const todoSelector = createSelector(
  todoFeatureSelector,
  (todoState: TodoState) => todoState.todos.data
)
