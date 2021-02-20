import { Action, createReducer, on } from "@ngrx/store";
import { UserStateInterface } from "../../types/userTypes/userState.interface";
import { getUserSuccessAction } from "./actions/getUser.action";

const initialState: UserStateInterface = {
  data: null
}

const userReducer = createReducer(
  initialState,
  on(
    getUserSuccessAction,
    (state, action): UserStateInterface => ({
      ...state,
      data: action.users
    })
  )
)

export function reducers(state: UserStateInterface, action: Action) {
  return userReducer(state, action)
}
