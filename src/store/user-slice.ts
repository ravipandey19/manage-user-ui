import { UserModel, UserArrayModel } from "../models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialUserState: UserArrayModel = {
    all_user_list: [],
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setTodos(state, action: PayloadAction<UserModel[]>) {
            state.all_user_list = action.payload;
        },
    }
})
export default userSlice;