import { createSelector } from "@ngrx/store"
import { createFeatureSelector } from "@ngrx/store"
import { TodoState } from ".."

export const userFeatureSelector = createFeatureSelector('todos')

export const usersSelector = createSelector(
  userFeatureSelector,
  (usersState: TodoState) => usersState.users.data
)
