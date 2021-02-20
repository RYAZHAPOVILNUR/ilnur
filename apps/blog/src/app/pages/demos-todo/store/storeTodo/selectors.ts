import { createSelector } from "@ngrx/store"
import { createFeatureSelector } from "@ngrx/store"
import { AppStateInterface } from "../../types/appState.interface"
import { TodoStateInterface } from "../../types/todoTypes/todoState.interface"

export const todoFeatureSelector = createFeatureSelector<
  AppStateInterface,
  TodoStateInterface
>('todos')

export const todoSelector = createSelector(
  todoFeatureSelector,
  (todoState: TodoStateInterface) => todoState.data
)
