import { IGroup } from "./group";

export interface ITask {
    id: string;
    idGroup: string;
    text: string;
    isToday?: boolean;
    isCompleted?: boolean;
    isImportant?: boolean;
    startDate?: string;
    endDate?: string;

}

export interface ITaskState {
    isloading: boolean;
    task: ITask | undefined;
    tasks: ITask[];
    error: any;
}

export const taskStateInitial: ITaskState = {
    isloading: false,
    task: undefined,
    tasks: [],
    error: undefined
}