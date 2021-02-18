import { createSelector } from "@ngrx/store"
import { createFeatureSelector } from "@ngrx/store"
import { AppStateInterface } from "../types/appState.interface"
import { UserStateInterface } from "../types/userState.interface"

export const userFeatureSelector = createFeatureSelector<
  AppStateInterface,
  UserStateInterface
>('users')

export const usersSelector = createSelector(
  userFeatureSelector,
  (usersState: UserStateInterface) => usersState.data
)
