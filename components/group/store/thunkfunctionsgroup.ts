import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCreateGroup = createAsyncThunk('groups/createGroup', async ({id, name}:{id:string, name:string}) => {
    return { id, name};
 });

 export const fetchEditGroup = createAsyncThunk('groups/editGroup', async ({id, name}:{id:string, name:string}) => {
    return { id, name};
 });
 
 
 export const fetchDeleteGroup = createAsyncThunk('groups/deleteGroup', async ({id}:{id:string})=> id);