import userSlice from './user-slice'
import { AnyAction } from '@reduxjs/toolkit'
import { ThunkAction } from '@reduxjs/toolkit'
import { RootState } from './index'
import { UserModel } from "../models/redux-models";
import UserService from "../services/userService";

export const _userActions = userSlice.actions

export const fetchUserData = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        if (getState().user.all_user_list.length === 0) {
            const response: UserModel[] = await UserService.getAllData();
            dispatch(_userActions.setTodos(response))
        }
    }

}

// export const fetchParticularTodo = (todo_id: number): ThunkAction<void, RootState, unknown, AnyAction> => {
//     return async (dispatch, getState) => {
//         const response: UserModel = await UserService.getParticularTodo(todo_id);
//         dispatch(_userActions.setParticularTodo(response))
//     }
// }