import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCreateTask = createAsyncThunk('tasks/createTask', async (
   {
      id,
      idGroup,
      text
   }: {
      id: string,
      idGroup: string,
      text: string
   }) => {
   return { id, idGroup, text };
});

export const fetchEditTask = createAsyncThunk('tasks/editTask', async (
   {
      id,
      idGroup,
      text,
      isToday,
      isCompleted,
      isImportant,
      startDate,
      endDate
   }: {
      id: string,
      idGroup: string,
      text: string,
      isToday: boolean,
      isCompleted: boolean,
      isImportant: boolean,
      startDate: string,
      endDate: string,
   }) => {
   return { id, idGroup, text, isToday, isCompleted, isImportant, startDate, endDate };
});

export const fetchDeleteTask = createAsyncThunk('tasks/deleteTask', async ({ id }: { id: string }) => id);