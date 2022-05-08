import { IGroup } from "./group";
import { ITask } from "./task";
import { IUser } from "./user";

export interface IAppModel {
    user: IUser;
    tasks:ITask[];
    groups:IGroup[];
}