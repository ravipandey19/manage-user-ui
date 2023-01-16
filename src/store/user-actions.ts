import userSlice from './user-slice'
import { AnyAction } from '@reduxjs/toolkit'
import { ThunkAction } from '@reduxjs/toolkit'
import { RootState } from './index'
import { UserModel } from "../models/redux-models";
import UserService from "../services/userService";
import { message } from 'antd';

export const _userActions = userSlice.actions

export const fetchUserData = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        if (getState().user.all_user_list.length === 0) {
            const response: UserModel[] = await UserService.getAllData();
            dispatch(_userActions.setData(response))
        }
    }
}

export const addUserData = (values: object): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async () => {
        const response: any = await UserService.addData(values);
        message.success(`${response.status}! User ${response.message}.`)
    }
}