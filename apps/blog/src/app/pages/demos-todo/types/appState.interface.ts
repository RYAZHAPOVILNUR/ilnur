import { GetTodosInterface } from "./todoTypes/getTodo.interface";
import { GetUsersInterface } from "./userTypes/getUsers.interface";

export interface AppStateInterface {
  users: GetUsersInterface
  todos: GetTodosInterface
}
