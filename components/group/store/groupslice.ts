import { createSlice } from "@reduxjs/toolkit";
import { GroupStateInitial } from "../../../models/group";
import { fetchCreateGroup, fetchDeleteGroup, fetchEditGroup } from "./thunkfunctionsgroup";

export const groupsReducer = createSlice({
    name: 'groups',
    initialState: GroupStateInitial,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchCreateGroup.pending, (state, action) => {
            console.log("pending creator")
            state.isloading = true;
        }),
            builder.addCase(fetchCreateGroup.fulfilled, (state, action) => {
                const exists = state.groups.find(x=> x.name === action.payload.name);
                if( exists !== undefined ) throw new Error("Error group already exists");
                state.groups.push(action.payload);
                console.log("created, full or complete")
                state.isloading = false;
            })
        builder.addCase(fetchCreateGroup.rejected, (state, action) => {
            state.isloading = false;
            console.log("Error create groups")
            state.error = action.error;
        }),
            builder.addCase(fetchEditGroup.pending, (state, action) => {
                console.log("pending editing")
                state.isloading = true;
            }),
            builder.addCase(fetchEditGroup.fulfilled, (state, action) => {
                const index = state.groups.findIndex(x => x.id === action.payload.id);
                state.groups[index].name = action.payload.name;
                console.log("edit, full or complete")
                state.isloading = false;
            })
        builder.addCase(fetchEditGroup.rejected, (state, action) => {
            state.isloading = false;
            console.log("Error create groups")
            state.error = action.error;
        }),
            builder.addCase(fetchDeleteGroup.pending, (state, action) => {
                state.isloading = true;
            }),
            builder.addCase(fetchDeleteGroup.fulfilled, (state, action) => {
                state.isloading = false;
                const index = state.groups.findIndex(x => x.id === action.payload);
                state.groups.splice(index, 1);
            }),
            builder.addCase(fetchDeleteGroup.rejected, (state, action) => {
                state.isloading = false;
                state.error = action.error;
            })
    }
});

export default groupsReducer.reducer;