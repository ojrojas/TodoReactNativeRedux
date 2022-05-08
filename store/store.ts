import StorageService from "../services/storage";
import { configureStore } from '@reduxjs/toolkit'
import { taskReducer } from "../components/task/store/taskslice";
import { userReducer } from "../components/user/store/userslice";
import { groupsReducer } from '../components/group/store/groupslice';


/** State in localstorage * */
const persistedState = StorageService.loadState();

export const store = configureStore({
    reducer: {
        tasks: taskReducer.reducer,
        users: userReducer.reducer,
        groups: groupsReducer.reducer
    }
});


export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;