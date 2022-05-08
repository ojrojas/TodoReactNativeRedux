import { createSlice } from "@reduxjs/toolkit";
import { initialUser } from "../../../itemssolutions/initialdata";

export const userReducer = createSlice({
    name: 'user',
    initialState: initialUser,
    reducers: {
        
    }
});

export const {  } = userReducer.actions
export default userReducer.reducer