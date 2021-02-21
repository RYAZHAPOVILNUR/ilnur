import { combineReducers } from "@ngrx/store";
import { TodoStateInterface } from "../types/todoTypes/todoState.interface";
import { UserStateInterface } from "../types/userTypes/userState.interface";
import { reducer } from "./storeTodo/reducers";
import { reducers } from "./storeUser/reducers";

export const todoReducer = combineReducers<TodoState>({
  todos: reducer,
  users: reducers
});

export interface TodoState {
  todos: TodoStateInterface,
  users: UserStateInterface
}