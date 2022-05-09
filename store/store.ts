import StorageService from "../services/storage";
import { configureStore } from '@reduxjs/toolkit'
import { taskReducer } from "../components/task/store/taskslice";
import { userReducer } from "../components/user/store/userslice";
import { groupsReducer } from '../components/group/store/groupslice';
import { throttle } from "lodash";


/** State in localstorage * */
let persistedState= undefined;
StorageService.loadState().then((response)=> persistedState= response);

export const store = configureStore({
    reducer: {
        tasks: taskReducer.reducer,
        users: userReducer.reducer,
        groups: groupsReducer.reducer
    },
    preloadedState: persistedState
});

store.subscribe(throttle(()=> {
    StorageService.saveState(store.getState())
}, 1000));


export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;