import { createSlice } from "@reduxjs/toolkit";
import { taskStateInitial } from "../../../models/task";
import { fetchCreateTask, fetchDeleteTask, fetchEditTask } from "./thunkfunctionstask";

export const taskReducer = createSlice({
    name: 'task',
    initialState: taskStateInitial,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchCreateTask.pending, (state, action) => {
            console.log("pending creator")
            state.isloading = true;
        }),
            builder.addCase(fetchCreateTask.fulfilled, (state, action) => {
                const exists = state.tasks.find(x=> x.text === action.payload.text);
                if( exists !== undefined ) throw new Error("Error task already exists");
                state.tasks.push(action.payload);
                console.log("created, full or complete")
                state.isloading = false;
            })
        builder.addCase(fetchCreateTask.rejected, (state, action) => {
            state.isloading = false;
            console.log("Error create tasks")
            state.error = action.error;
        }),
            builder.addCase(fetchEditTask.pending, (state, action) => {
                console.log("pending editing")
                state.isloading = true;
            }),
            builder.addCase(fetchEditTask.fulfilled, (state, action) => {
                const index = state.tasks.findIndex(x => x.id === action.payload.id);
                state.tasks[index].text = action.payload.text;
                console.log("edit, full or complete")
                state.isloading = false;
            })
        builder.addCase(fetchEditTask.rejected, (state, action) => {
            state.isloading = false;
            console.log("Error create tasks")
            state.error = action.error;
        }),
            builder.addCase(fetchDeleteTask.pending, (state, action) => {
                state.isloading = true;
            }),
            builder.addCase(fetchDeleteTask.fulfilled, (state, action) => {
                state.isloading = false;
                const index = state.tasks.findIndex(x => x.id === action.payload);
                state.tasks.splice(index, 1);
            }),
            builder.addCase(fetchDeleteTask.rejected, (state, action) => {
                state.isloading = false;
                state.error = action.error;
            })
    }
});

export default taskReducer.reducer